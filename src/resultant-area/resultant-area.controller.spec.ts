import { Test, TestingModule } from '@nestjs/testing';
import { ResultantAreaController } from './resultant-area.controller';
import { ResultantAreaService } from './resultant-area.service';

describe('ResultantAreaController', () => {
  let controller: ResultantAreaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResultantAreaController],
      providers: [ResultantAreaService],
    }).compile();

    controller = module.get<ResultantAreaController>(ResultantAreaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
