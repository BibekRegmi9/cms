import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Accesses } from './entities/accesses.entity';
import { Repository } from 'typeorm';
import { CreateAccessesDto } from './dto/create-accesses.dto';

@Injectable()
export class AccessesService {

    constructor(@InjectRepository(Accesses) private accessesRepository: Repository<Accesses>){}

    async create(createAccessesDto: CreateAccessesDto){
        
    }
}
