import { Module } from '@nestjs/common';
import { ResultantAreaWiseIndicatorController } from './resultant-area-wise-indicator.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResultantAreaWiseIndicator } from './entities/create-resultant-area-wise-indicator.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ResultantAreaWiseIndicator])],
  controllers: [ResultantAreaWiseIndicatorController]
})
export class ResultantAreaWiseIndicatorModule {}
