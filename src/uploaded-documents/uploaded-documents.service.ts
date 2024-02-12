import { Injectable } from '@nestjs/common';
import { CreateUploadedDocumentDto } from './dto/create-uploaded-document.dto';
import { UpdateUploadedDocumentDto } from './dto/update-uploaded-document.dto';

@Injectable()
export class UploadedDocumentsService {
  create(createUploadedDocumentDto: CreateUploadedDocumentDto) {
    return 'This action adds a new uploadedDocument';
  }

  findAll() {
    return `This action returns all uploadedDocuments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} uploadedDocument`;
  }

  update(id: number, updateUploadedDocumentDto: UpdateUploadedDocumentDto) {
    return `This action updates a #${id} uploadedDocument`;
  }

  remove(id: number) {
    return `This action removes a #${id} uploadedDocument`;
  }
}
