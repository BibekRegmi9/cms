import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ModulePrivilegeMapping } from './module_privilege_mapping.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ModulePrivilegeService {
    constructor(
        @InjectRepository(ModulePrivilegeMapping) private userRoleService: Repository<ModulePrivilegeMapping>
    ){}

    
}
