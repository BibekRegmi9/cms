import { Injectable } from '@nestjs/common';
import { CreateResultantAreaDto } from './dto/create-resultant-area.dto';
import { UpdateResultantAreaDto } from './dto/update-resultant-area.dto';

@Injectable()
export class ResultantAreaService {
  create(createResultantAreaDto: CreateResultantAreaDto) {
    return 'This action adds a new resultantArea';
  }

  findAll() {
    return `This action returns all resultantArea`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resultantArea`;
  }

  update(id: number, updateResultantAreaDto: UpdateResultantAreaDto) {
    return `This action updates a #${id} resultantArea`;
  }

  remove(id: number) {
    return `This action removes a #${id} resultantArea`;
  }
}
