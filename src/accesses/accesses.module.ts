import { Module } from '@nestjs/common';
import { AccessesController } from './accesses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Accesses } from './entities/accesses.entity';
import { AccessesService } from './accesses.service';

@Module({
  imports: [TypeOrmModule.forFeature([Accesses])], 
  controllers: [AccessesController],
  providers: [AccessesService]
})
export class AccessesModule {}
