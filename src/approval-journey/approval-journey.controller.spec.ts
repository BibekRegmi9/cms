import { Test, TestingModule } from '@nestjs/testing';
import { ApprovalJourneyController } from './approval-journey.controller';

describe('ApprovalJourneyController', () => {
  let controller: ApprovalJourneyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApprovalJourneyController],
    }).compile();

    controller = module.get<ApprovalJourneyController>(ApprovalJourneyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
