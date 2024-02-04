import { Test, TestingModule } from '@nestjs/testing';
import { ModulePrivilegeController } from './module-privilege.controller';

describe('ModulePrivilegeController', () => {
  let controller: ModulePrivilegeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModulePrivilegeController],
    }).compile();

    controller = module.get<ModulePrivilegeController>(ModulePrivilegeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
