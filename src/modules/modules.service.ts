import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Module_Ent } from './entities/module.entity';

@Injectable()
export class ModulesService {
    constructor(
        @InjectRepository(Module_Ent) private moduleRepository: Repository<Module_Ent>,
    ){}


    
}
