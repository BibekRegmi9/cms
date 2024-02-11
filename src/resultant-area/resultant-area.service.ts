import { Injectable } from '@nestjs/common';
import { CreateResultantAreaDto } from './dto/create-resultant-area.dto';
import { UpdateResultantAreaDto } from './dto/update-resultant-area.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ResultantArea } from './entities/resultant-area.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ResultantAreaService {

  constructor(@InjectRepository(ResultantArea) private resultantAreaRepository: Repository<ResultantArea>){}

  async create(createResultantAreaDto: CreateResultantAreaDto) {
    const resultantArea = this.resultantAreaRepository.create(createResultantAreaDto);
    const saveResultantArea = this.resultantAreaRepository.save(resultantArea);
    return saveResultantArea;
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
