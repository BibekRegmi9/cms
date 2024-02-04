import { Module } from '@nestjs/common';
import { ScreenController } from './screen.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Screen } from './entities/screen.entity';
import { ScreenService } from './screen.service';

@Module({
  imports: [TypeOrmModule.forFeature([Screen])],
  controllers: [ScreenController],
  providers: [ScreenService]
})
export class ScreenModule {}
