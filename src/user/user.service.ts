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
    @InjectRepository(UserRoleMapping) private userRoleRepository: Repository<UserRoleMapping>
  ){}

  async create(createUserDto: CreateUserDto) {
       const user = this.userRepository.create(createUserDto);
       const saveUser = await this.userRepository.save(user);
       for(let role of createUserDto.roleId){
        if(role){
          const createUserRole = this.userRoleRepository.create({
            user_id:saveUser.id,
            role_id:role
          })
          const createdUser = await this.userRoleRepository.save(createUserRole);
          return createdUser
        }
       }
       

       

  }

  findAll() {
    const user = this.userRepository.find();
    if(!user){
      throw new HttpException('cannot fetch users',HttpStatus.NOT_FOUND);
    }
    return user;
  }

  
  findOne(id: number) {
    const user = this.userRepository.findOne({where: {id}})
    if(!user){
      throw new HttpException('cannot fetch user',HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepository.update({id}, updateUserDto);
  }

  remove(id: number) {
    this.userRepository.delete({id});
  }
}
