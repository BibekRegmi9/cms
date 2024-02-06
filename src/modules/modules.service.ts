import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Module_Ent } from './entities/module.entity';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { ModulePrivilegeMapping } from 'src/module-privilege/module_privilege_mapping.entity';

@Injectable()
export class ModulesService {
    constructor(
        @InjectRepository(Module_Ent) private moduleRepository: Repository<Module_Ent>,
        @InjectRepository(ModulePrivilegeMapping) private modulePrivilegeMapping: Repository<ModulePrivilegeMapping>
    ){}

    
    async createModule(createModuleDto: CreateModuleDto){
        const module = this.moduleRepository.create(createModuleDto);
        const saveModule =await this.moduleRepository.save(module);

        for(let prv of createModuleDto.privileges){
            if(prv){
                const createPrivilege = this.modulePrivilegeMapping.create({
                    privilege_id: prv.privilege_id,
                    method: prv.method,
                    end_point: prv.endpoint,
                    module_id:saveModule.id    
                });
                await this.modulePrivilegeMapping.save(createPrivilege);
            }
        }

        return saveModule;
    }


    async getAll(){
        const query = `select m.id,m.name,m.description,
        json_agg(case when mp.id is not null then
          json_build_object('id',mp.id,'url',mp.end_point,'method',mp."method")
         else null
         end)
        as mid from modules m
        left join module_privilege mp on mp."moduleId" = m.id
        group by 1,2,3;
        `;

        const fetchModuleWithPrivilege = await this.moduleRepository.query(query);
        return fetchModuleWithPrivilege;
    }
    


    async getOne(id: number){
        const query = `
        select m.id,m.name,m.description,
        json_agg(case when mp.id is not null then
          json_build_object('id',mp.id,'url',mp.end_point,'method',mp."method")
         else null
         end)
        as mid from modules m
        left join module_privilege mp on mp."moduleId" = m.id
        WHERE m.id = $1
        group by 1,2,3;
        `;

        const fetchedUSer = await this.moduleRepository.query(query, [id]);
        return fetchedUSer;
    }


    async update(id: number, updateModuleDto: UpdateModuleDto){
        return await this.moduleRepository.manager.transaction(async (t) => {
            await this.checkIfModuleExist(id);
            const existModule = await this.moduleRepository.findOne({ where: { id } });

            // checking module with given id exist or not
            if (!existModule) {
                throw new HttpException(
                `The module with id: ${id} not found.`,
                HttpStatus.NOT_FOUND
                );
            }

            const { privileges, ...rest } = updateModuleDto; 
            await this.moduleRepository.update(id, rest);

            

            // update module privilege
            const alreadyExistingPrivilegeIds = (
                await this.modulePrivilegeMapping.find({where: {module_id:id} })
              ).map((relation) => relation.module_id);

            //new privileges
            const newModuleIds = updateModuleDto.privileges?.filter(f=>!f?.id)


            for(let prv of newModuleIds){
              const newPrv=  this.modulePrivilegeMapping.create(
                    {
                        end_point:prv.endpoint,
                        method:prv.method,
                        module_id:id,
                        privilege_id:prv.privilege_id
                    }
                )
                await this.modulePrivilegeMapping.save(newPrv)
            }
            
              
            const existedPrivilegeFromDto=updateModuleDto.privileges.filter(f=>f?.id).map(m=>m.id)

            for(let prv of updateModuleDto.privileges?.filter(f=>f.id)){
                await this.modulePrivilegeMapping.update({id:prv.id},prv)

            }

            // deleting privileges
            const privilegeToDelete = alreadyExistingPrivilegeIds.filter(
                (privileges) => !existedPrivilegeFromDto.includes(privileges)
            );


            for(let prv of privilegeToDelete){
                await this.modulePrivilegeMapping.delete({id:prv})
            }

            // adding privileges
            const privilegeToAdd = newModuleIds.filter(
                (privileges) => !alreadyExistingPrivilegeIds.includes
            );

            // delete the old privileges
            for (const privilegeId of privilegeToDelete) {
                await this.modulePrivilegeMapping.delete({ module_id: id, privilege_id: privilegeId })
            }
        });
    }



    // checking if user exist or not
    async checkIfModuleExist(id?: number) {
        const existModule = await this.moduleRepository.findOne({ where: { id } });
        if (existModule && existModule.id != id) {
          throw new HttpException(
            `The module with id ${id} already exist`,
            HttpStatus.CONFLICT,
          );
        }
      }


    async delete(id: number){
        await this.moduleRepository.delete({id});
    }

}
