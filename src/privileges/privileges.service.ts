import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Privilege } from './entities/privileges.entity';
import { Repository } from 'typeorm';
import { CreatePrivilegeDto } from './dto/create-privilege.dto';
import { UpdatePrivilegeDto } from './dto/update-privilege.dto';

@Injectable()
export class PrivilegesService {
    constructor(
        @InjectRepository(Privilege) private privilegeRepository: Repository<Privilege>
     ){}


     async createPrivilege(createPrivilegeDto: CreatePrivilegeDto){
        const privilege = this.privilegeRepository.create(createPrivilegeDto);
        const savedPrivilege = await this.privilegeRepository.save(privilege);
        return savedPrivilege;
     }


     async getAllPrivilege(){
        const privilege = await this.privilegeRepository.find();
        return privilege;
     }


     async getOnePrivilege(id: number){
        const privilege = await this.privilegeRepository.findOneBy({id});
        return privilege;
     }


     async updatePrivilege(id: number, updatePrivilegeDto: UpdatePrivilegeDto){
        const privilege = await this.privilegeRepository.update({id}, updatePrivilegeDto);
        return privilege;
     }


     async deletePrivilege(id: number){
        await this.privilegeRepository.delete({id});
     }
}
