import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResultantAreaWiseIndicator } from './entities/create-resultant-area-wise-indicator.entity';
import { Repository } from 'typeorm';
import { CreateResultantAreaWiseIndicatorDto } from './dto/create-resultant-area-wise-indicator.dto';
import { UpdateResultantAreaWiseIndicatorDto } from './dto/update-resultant-area-wise-indicator.dto';

@Injectable()
export class ResultantAreaWiseIndicatorService {

    constructor(@InjectRepository(ResultantAreaWiseIndicator) private resultantAreaWiseIndicatorRepository: Repository<ResultantAreaWiseIndicator>,
    ){}

    async create(createResultantAreaWiseIndicatorDto: CreateResultantAreaWiseIndicatorDto){
        
        const existResultantAreaWiseIndicator =  await this.resultantAreaWiseIndicatorRepository.find
        ({
            where: {
                name:createResultantAreaWiseIndicatorDto.indicatorName
            }
        })
        if(existResultantAreaWiseIndicator){
            throw HttpStatus.CONFLICT
        } 

        const resultantAreaWiseIndicator = this.resultantAreaWiseIndicatorRepository.create(createResultantAreaWiseIndicatorDto);
        const saveResultantAreaWiseIndicator = this.resultantAreaWiseIndicatorRepository.save(resultantAreaWiseIndicator);
        return saveResultantAreaWiseIndicator;
    }



    async findAll(){
        const query = `SELECT 
                        name, 
                        description, 
                        indicator_code 
                        FROM resultant-area-wise-indicator 
                        LEFT JOIN resultant_area ra ON ra.id = resultant-area-wise-indicator.resultant_area_id 
                        GROUP BY 1`;

        const resultantAreaWiseIndicator = await this.resultantAreaWiseIndicatorRepository.query(query);
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
