import { Module } from '@nestjs/common';
import { AccessesController } from './accesses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Accesses } from './entities/accesses.entity';
import { AccessesService } from './accesses.service';
import { ModulePrivilegeMapping } from 'src/module-privilege/module_privilege_mapping.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Accesses, ModulePrivilegeMapping])], 
  controllers: [AccessesController],
  providers: [AccessesService]
})
export class AccessesModule {}
