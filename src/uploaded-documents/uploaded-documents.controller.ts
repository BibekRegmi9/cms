import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UploadedDocumentsService } from './uploaded-documents.service';
import { CreateUploadedDocumentDto } from './dto/create-uploaded-document.dto';
import { UpdateUploadedDocumentDto } from './dto/update-uploaded-document.dto';

@Controller('uploaded-documents')
export class UploadedDocumentsController {
  constructor(private readonly uploadedDocumentsService: UploadedDocumentsService) {}

  @Post()
  create(@Body() createUploadedDocumentDto: CreateUploadedDocumentDto) {
    return this.uploadedDocumentsService.create(createUploadedDocumentDto);
  }

  @Get()
  findAll() {
    return this.uploadedDocumentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.uploadedDocumentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUploadedDocumentDto: UpdateUploadedDocumentDto) {
    return this.uploadedDocumentsService.update(+id, updateUploadedDocumentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uploadedDocumentsService.remove(+id);
  }
}
