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


  async findAll() {
    const resultantArea = this.resultantAreaRepository.find();
    return resultantArea;
  }


  findOne(id: number) {
    const resultantArea = this.resultantAreaRepository.findBy({id});
    return resultantArea;
  }


  update(id: number, updateResultantAreaDto: UpdateResultantAreaDto) {
    const resultantArea = this.resultantAreaRepository.update({id}, updateResultantAreaDto);
    return resultantArea;
  }

  
  remove(id: number) {
    this.resultantAreaRepository.delete(id);
  }
}
