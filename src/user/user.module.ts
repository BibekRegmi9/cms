import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRoleMapping } from 'src/user-role/user_role_mapping.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserRoleMapping])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
