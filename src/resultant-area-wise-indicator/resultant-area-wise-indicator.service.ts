import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResultantAreaWiseIndicator } from './entities/create-resultant-area-wise-indicator.entity';
import { Repository } from 'typeorm';
import { CreateResultantAreaWiseIndicatorDto } from './dto/create-resultant-area-wise-indicator.dto';
import { UpdateResultantAreaWiseIndicatorDto } from './dto/update-resultant-area-wise-indicator.dto';

@Injectable()
export class ResultantAreaWiseIndicatorService {

    constructor(@InjectRepository(ResultantAreaWiseIndicator) private resultantAreaWiseIndicatorRepository: Repository<ResultantAreaWiseIndicator>){}

    async create(createResultantAreaWiseIndicatorDto: CreateResultantAreaWiseIndicatorDto){
        const resultantAreaWiseIndicator = this.resultantAreaWiseIndicatorRepository.create(createResultantAreaWiseIndicatorDto);
        const saveResultantAreaWiseIndicator = this.resultantAreaWiseIndicatorRepository.save(resultantAreaWiseIndicator);
        return saveResultantAreaWiseIndicator;
    }


    async findAll(){
        const resultantAreaWiseIndicator = await this.resultantAreaWiseIndicatorRepository.find();
        return resultantAreaWiseIndicator;
    }


    async findOne(id: number){
        const resultantAreaWiseIndicator = await this.resultantAreaWiseIndicatorRepository.findBy({id});
        return resultantAreaWiseIndicator;
    }


    async update(id: number, updateResultantAreaWiseIndicatorDto:UpdateResultantAreaWiseIndicatorDto){
        const resultantAreaWiseIndicator = await this.resultantAreaWiseIndicatorRepository.update({id}, updateResultantAreaWiseIndicatorDto);
        return resultantAreaWiseIndicator;
    }


    async remove(id: number){
        await this.resultantAreaWiseIndicatorRepository.delete(id);
    }

}
