import { Module } from '@nestjs/common';
import { ResultantAreaWiseIndicatorController } from './resultant-area-wise-indicator.controller';

@Module({
  controllers: [ResultantAreaWiseIndicatorController]
})
export class ResultantAreaWiseIndicatorModule {}
