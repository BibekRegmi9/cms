import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRoleMapping } from './user_role_mapping.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserRoleService {
    constructor(
        @InjectRepository(UserRoleMapping) private userRoleService: Repository<UserRoleMapping>    ){

    }
}
