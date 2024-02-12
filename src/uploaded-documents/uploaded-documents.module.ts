import { Module } from '@nestjs/common';
import { UploadedDocumentsService } from './uploaded-documents.service';
import { UploadedDocumentsController } from './uploaded-documents.controller';

@Module({
  controllers: [UploadedDocumentsController],
  providers: [UploadedDocumentsService],
})
export class UploadedDocumentsModule {}
