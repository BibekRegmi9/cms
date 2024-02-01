import { ModulesService } from './modules.service';
import { ModulesController } from './modules.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module_Ent } from './entities/module.entity';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Module_Ent])],
  providers: [ModulesService],
  controllers: [ModulesController],
})

export class ModulesModule {}
