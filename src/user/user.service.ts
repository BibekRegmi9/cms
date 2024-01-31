import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>
  ){}

  create(createUserDto: CreateUserDto) {
       const user = this.userRepository.create(createUserDto);
       if(!user){
        throw new HttpException('User not found',HttpStatus.BAD_REQUEST);
       }
       return this.userRepository.save(user);
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
