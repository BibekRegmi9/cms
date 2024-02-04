import { Test, TestingModule } from '@nestjs/testing';
import { ModulePrivilegeService } from './module-privilege.service';

describe('ModulePrivilegeService', () => {
  let service: ModulePrivilegeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModulePrivilegeService],
    }).compile();

    service = module.get<ModulePrivilegeService>(ModulePrivilegeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
