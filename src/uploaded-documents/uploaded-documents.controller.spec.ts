import { Test, TestingModule } from '@nestjs/testing';
import { UploadedDocumentsController } from './uploaded-documents.controller';
import { UploadedDocumentsService } from './uploaded-documents.service';

describe('UploadedDocumentsController', () => {
  let controller: UploadedDocumentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadedDocumentsController],
      providers: [UploadedDocumentsService],
    }).compile();

    controller = module.get<UploadedDocumentsController>(UploadedDocumentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
