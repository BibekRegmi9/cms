import { Test, TestingModule } from '@nestjs/testing';
import { ResultantAreaWiseIndicatorController } from './resultant-area-wise-indicator.controller';

describe('ResultantAreaWiseIndicatorController', () => {
  let controller: ResultantAreaWiseIndicatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResultantAreaWiseIndicatorController],
    }).compile();

    controller = module.get<ResultantAreaWiseIndicatorController>(ResultantAreaWiseIndicatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
