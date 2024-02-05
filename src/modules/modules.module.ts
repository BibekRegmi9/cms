import { ModulesService } from './modules.service';
import { ModulesController } from './modules.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module_Ent } from './entities/module.entity';
import { Module } from '@nestjs/common';
import { ModulePrivilegeMapping } from 'src/module-privilege/module_privilege_mapping.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Module_Ent,ModulePrivilegeMapping])],
  providers: [ModulesService],
  controllers: [ModulesController],
  exports: [ModulesService]
})

export class ModulesModule {}
