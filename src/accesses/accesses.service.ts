import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Accesses } from './entities/accesses.entity';
import { Repository } from 'typeorm';
import { Action, CreateAccessesDto } from './dto/create-accesses.dto';
import { ModulePrivilegeMapping } from 'src/module-privilege/module_privilege_mapping.entity';

@Injectable()
export class AccessesService {

    constructor(
        @InjectRepository(Accesses) private accessesRepository: Repository<Accesses>,
        @InjectRepository(ModulePrivilegeMapping) private modulePrivilegeMappingRepository: Repository<ModulePrivilegeMapping>
    
    ){}
    

    async create(createAccessesDto: CreateAccessesDto){
        
        return this.accessesRepository.manager.transaction(async (t)=> {

            // fetching existing moduleId and privilegeId
            const existModulePrivilege = await this.modulePrivilegeMappingRepository.find
                ({where: {
                    module_id: createAccessesDto.module_id,
                    privilege_id: createAccessesDto.privilege_id
                 }});
            
            for(let exist_mp of existModulePrivilege){
                // find already existed access
                const alreadyExistingAccess = await this.accessesRepository.findOne
                ({where: {
                    role_id: createAccessesDto.role_id,
                    module_privilege_id: exist_mp.id
                }})

                if(createAccessesDto.action == Action.CREATE){
                    if(alreadyExistingAccess){
                        await this.accessesRepository.update({id: alreadyExistingAccess.id}, {is_active: true})
                    } else {
                        const access = this.accessesRepository.create({
                            module_privilege_id: exist_mp.id,
                            role_id: createAccessesDto.role_id
                        })
                        await this.accessesRepository.save(access);
                    }
                } else if(createAccessesDto.action == Action.DELETE){
                    alreadyExistingAccess.id && await this.accessesRepository.update
                    (
                        {id: alreadyExistingAccess.id}, 
                        {is_active: false})
                }

            }

            return true;

        })
        
    }
}
