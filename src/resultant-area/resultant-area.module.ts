import { Module } from '@nestjs/common';
import { ResultantAreaService } from './resultant-area.service';
import { ResultantAreaController } from './resultant-area.controller';

@Module({
  controllers: [ResultantAreaController],
  providers: [ResultantAreaService],
})
export class ResultantAreaModule {}
