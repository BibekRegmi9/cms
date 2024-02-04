import { Module } from '@nestjs/common';
import { ModulePrivilegeController } from './module-privilege.controller';

@Module({
  controllers: [ModulePrivilegeController]
})
export class ModulePrivilegeModule {}
