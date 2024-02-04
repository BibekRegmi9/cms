import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Module_Ent } from './entities/module.entity';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';

@Injectable()
export class ModulesService {
    constructor(
        @InjectRepository(Module_Ent) private moduleRepository: Repository<Module_Ent>,
    ){}

    async createModule(createModuleDto: CreateModuleDto){
        const module = this.moduleRepository.create(createModuleDto);
        const newModule = this.moduleRepository.save(module);
        return newModule;
    }

    async getAll(){
        const module = await this.moduleRepository.find()
        return module;
    }


    async getOne(id: number){
        const module = await this.moduleRepository.findOneBy({id});
        return module;
    }


    async update(id: number, updateModuleDto: UpdateModuleDto){
        const module = await this.moduleRepository.update({id}, updateModuleDto)
        return module;
    }


    async delete(id: number){
        await this.moduleRepository.delete({id});
    }

}
