import { Module } from '@nestjs/common';
import { AccessesController } from './accesses.controller';

@Module({
  controllers: [AccessesController]
})
export class AccessesModule {}
