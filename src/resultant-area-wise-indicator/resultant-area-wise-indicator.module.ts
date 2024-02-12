import { Module } from '@nestjs/common';
import { ResultantAreaWiseIndicatorController } from './resultant-area-wise-indicator.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResultantAreaWiseIndicator } from './entities/create-resultant-area-wise-indicator.entity';
import { ResultantAreaWiseIndicatorService } from './resultant-area-wise-indicator.service';

@Module({
  imports: [TypeOrmModule.forFeature([ResultantAreaWiseIndicator])],
  controllers: [ResultantAreaWiseIndicatorController],
  providers: [ResultantAreaWiseIndicatorService]
})
export class ResultantAreaWiseIndicatorModule {}
