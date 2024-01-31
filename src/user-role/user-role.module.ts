import { Module } from '@nestjs/common';
import { UserRoleService } from './user-role.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRoleMapping } from './user_role_mapping.entity';

@Module({
    imports:[TypeOrmModule.forFeature([UserRoleMapping])],
  providers: [UserRoleService]
})
export class UserRoleModule {
    
}
