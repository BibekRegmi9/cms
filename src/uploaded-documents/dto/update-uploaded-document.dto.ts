import { PartialType } from '@nestjs/mapped-types';
import { CreateUploadedDocumentDto } from './create-uploaded-document.dto';

export class UpdateUploadedDocumentDto extends PartialType(CreateUploadedDocumentDto) {}
