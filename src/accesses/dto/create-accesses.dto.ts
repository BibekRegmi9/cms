import { IsBoolean, IsEnum, IsNumber } from "class-validator";

export enum Action {
    DELETE = 'delete',
    CREATE = 'create'
}

export class CreateAccessesDto{
    
    @IsBoolean()
    is_active: boolean;

    @IsBoolean()
    is_permanent: boolean;

    @IsNumber()
    module_privilege_id: number;

    @IsNumber()
    role_id: number;

    @IsEnum({message: 'Action must be either "delete" or "create"'})
    action: Action;

}