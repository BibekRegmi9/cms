import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserRoleMapping } from 'src/user-role/user_role_mapping.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(UserRoleMapping)
    private userRoleRepository: Repository<UserRoleMapping>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    const saveUser = await this.userRepository.save(user);
    for (let role of createUserDto.roleId) {
      if (role) {
        const createUserRole = this.userRoleRepository.create({
          user_id: saveUser.id,
          role_id: role,
        });
        await this.userRoleRepository.save(createUserRole);
      } else throw new HttpException('ROle Not Found', HttpStatus.NOT_FOUND);
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
    // const user = this.userRepository.findOne({where: {id}})
    // if(!user){
    //   throw new HttpException('cannot fetch user',HttpStatus.NOT_FOUND);
    // }
    // return user;

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
    await this.userRepository.update({ id }, updateUserDto);
  }

  remove(id: number) {
    this.userRepository.delete({ id });
  }
}
