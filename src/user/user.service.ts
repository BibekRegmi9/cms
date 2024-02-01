import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserRoleMapping } from 'src/user-role/user_role_mapping.entity';
import * as bcrypt from 'bcrypt';


@Injectable()

export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(UserRoleMapping)
    private userRoleRepository: Repository<UserRoleMapping>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    // const user = this.userRepository.create(createUserDto);

    // hashing the password
    const hashedPassword = await bcrypt.hash(createUserDto.password, 12);
    const newUser = this.userRepository.create({
      ...createUserDto, password:hashedPassword
    });

    const saveUser = await this.userRepository.save(newUser);
    for (let role of createUserDto.roleId) {
      if (role) {
        const createUserRole = this.userRoleRepository.create({
          user_id: saveUser.id,
          role_id: role,
        });
        await this.userRoleRepository.save(createUserRole);
      } else throw new HttpException('Role Not Found', HttpStatus.NOT_FOUND);
    }
    return saveUser;
  }



  async findAll() {
    const query = `
    SELECT
      u.id,
      u.first_name_en,
      u.last_name_en,
      u.email,
      u.telephone_no,
      u.gender,
      CASE
        WHEN COUNT(r.id) > 0 THEN
          JSON_AGG(
            JSON_BUILD_OBJECT(
              'id', r.id,
              'name', r.name
            )
          )
        ELSE
          NULL
      END AS roles
    FROM
      users u
    LEFT JOIN
      user_role ur ON ur.user_id = u.id
    LEFT JOIN
      roles r ON ur.role_id = r.id
    GROUP BY
      u.id,
      u.first_name_en,
      u.email,
      u.telephone_no,
      u.last_name_en;`;

    const fetchUserWithRole = await this.userRepository.query(query);
    return fetchUserWithRole;
  }

  async findOne(id: number) {
    const query = `
    SELECT
  u.id,
  u.first_name_en,
  u.last_name_en,
  u.email,
  u.telephone_no,
  u.gender,
  CASE
    WHEN COUNT(r.id) > 0 THEN
      JSON_AGG(
        JSON_BUILD_OBJECT(
          'id', r.id,
          'name', r.name
        )
      )
    ELSE
      NULL
  END AS roles
FROM
  users u
LEFT JOIN
  user_role ur ON ur.user_id = u.id
LEFT JOIN
  roles r ON ur.role_id = r.id
WHERE
  u.id = $1
GROUP BY
  u.id,
  u.first_name_en,
  u.email,
  u.telephone_no,
  u.last_name_en;
`;
    const fetchedUser = await this.userRepository.query(query, [id]);
    return fetchedUser;
  }



  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.manager.transaction(async (t) => {
      await this.checkIfUserExist(updateUserDto.email, id);
      const existUser = await this.userRepository.findOne({ where: { id } });
      // checking user if given id exist or not
      if (!existUser) {
        throw new HttpException(
          `The User with id: ${id} not found.`,
          HttpStatus.NOT_FOUND
        );
      }

      const { roleId, ...rest } = updateUserDto;
      await this.userRepository.update(id, rest);

      // updating user roles
      const alreadyExistingRoleIds = (
        await this.userRoleRepository.find({where: {user_id:id} })
      ).map((relation) => relation.role_id);

      const newRoleIds = updateUserDto.roleId;

      // deleting roles
      const rolesToDelete = alreadyExistingRoleIds.filter(
        (roleId) => !newRoleIds.includes(roleId)
      );
      const rolesToAdd = newRoleIds.filter(
        (roleId) => !alreadyExistingRoleIds.includes(roleId)
      );
      //delete
      for (const roleIdToDelete of rolesToDelete) {
        const userRole = await this.userRoleRepository.findOne({
          where: { user_id: id, role_id: roleIdToDelete },
      });

      if (userRole) {
        await t.remove(UserRoleMapping, userRole);
      }
    }

    // adding the new roles
    for (const roleIdToAdd of rolesToAdd) {
      const roleExists = await this.userRoleRepository.count({
        where: { id: roleIdToAdd },
      });

      if (roleExists === 0) {
        throw new NotFoundException(
          `Role having Id ${roleIdToAdd} doesn't exist`
        );
      }

      const userRole = this.userRoleRepository.create({
        user_id: id,
        role_id: roleIdToAdd,
      });
      await t.save(userRole);
    }
    return { msg: "User updated " };
    }
    );
  }


  // To check if user exist or not
  async checkIfUserExist(email: string, id?: number) {
    const existUser = await this.userRepository.findOne({ where: { email } });
    if (existUser && existUser.id != id) {
      throw new HttpException(
        `The user with email ${email} already exist`,
        HttpStatus.CONFLICT,
      );
    }
  }




  remove(id: number) {
    this.userRepository.delete({ id });
  }
}
