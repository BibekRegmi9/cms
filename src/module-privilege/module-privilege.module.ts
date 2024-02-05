import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModulePrivilegeMapping } from './module_privilege_mapping.entity';
import { UserService } from 'src/user/user.service';
import { ModulePrivilegeService } from './module-privilege.service';

@Module({
  imports:[TypeOrmModule.forFeature([ModulePrivilegeMapping])],
  providers: [ModulePrivilegeService]
  
})
export class ModulePrivilegeModule {}
