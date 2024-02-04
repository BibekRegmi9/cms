import { IsString } from "class-validator";

export class CreatePrivilegeDto{

    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString()
    code: string;
}