import { Test, TestingModule } from '@nestjs/testing';
import { ResultantAreaService } from './resultant-area.service';

describe('ResultantAreaService', () => {
  let service: ResultantAreaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResultantAreaService],
    }).compile();

    service = module.get<ResultantAreaService>(ResultantAreaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
