import { Test, TestingModule } from '@nestjs/testing';
import { ApprovalJourneyService } from './approval-journey.service';

describe('ApprovalJourneyService', () => {
  let service: ApprovalJourneyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApprovalJourneyService],
    }).compile();

    service = module.get<ApprovalJourneyService>(ApprovalJourneyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
