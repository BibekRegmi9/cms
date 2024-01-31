import { IsNumber, IsString } from "class-validator";

export class CreateRoleDto {
    @IsString()
    created_by: string;

    @IsString()
    updated_by: string;

    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString()
    code: string;

    @IsString()
    role_type: string;

    @IsNumber()
    id: number;

}
