import { Test, TestingModule } from '@nestjs/testing';
import { ResultantAreaWiseIndicatorService } from './resultant-area-wise-indicator.service';

describe('ResultantAreaWiseIndicatorService', () => {
  let service: ResultantAreaWiseIndicatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResultantAreaWiseIndicatorService],
    }).compile();

    service = module.get<ResultantAreaWiseIndicatorService>(ResultantAreaWiseIndicatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
