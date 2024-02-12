import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResultantAreaWiseIndicator } from './entities/create-resultant-area-wise-indicator.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ResultantAreaWiseIndicatorService {

    constructor(@InjectRepository(ResultantAreaWiseIndicator) private resultantAreaWiseIndicatorRepository: Repository<ResultantAreaWiseIndicator>){}


    

}
