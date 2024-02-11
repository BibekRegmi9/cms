import { Module } from '@nestjs/common';
import { ResultantAreaService } from './resultant-area.service';
import { ResultantAreaController } from './resultant-area.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResultantArea } from './entities/resultant-area.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ResultantArea])],
  controllers: [ResultantAreaController],
  providers: [ResultantAreaService],
})
export class ResultantAreaModule {}
