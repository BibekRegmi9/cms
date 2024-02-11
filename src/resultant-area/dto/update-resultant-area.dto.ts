import { PartialType } from '@nestjs/mapped-types';
import { CreateResultantAreaDto } from './create-resultant-area.dto';

export class UpdateResultantAreaDto extends PartialType(CreateResultantAreaDto) {}
