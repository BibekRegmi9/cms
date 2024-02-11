import { Module } from '@nestjs/common';
import { ApprovalJourneyController } from './approval-journey.controller';

@Module({
  controllers: [ApprovalJourneyController]
})
export class ApprovalJourneyModule {}
