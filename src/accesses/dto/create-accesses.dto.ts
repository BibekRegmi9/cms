import { IsBoolean, IsNumber } from "class-validator";

export class CreateAccessesDto{
    
    @IsBoolean()
    is_active: boolean;

    @IsBoolean()
    is_permanent: boolean;

    @IsNumber()
    module_privilege_id: number;

    @IsNumber()
    role_id: number;
}