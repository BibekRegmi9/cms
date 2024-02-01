import { IsString } from "class-validator";

export class CreateModuleDto{

    @IsString()
    name: string;
    
    @IsString()
    description: string;

    @IsString()
    code: string;

    @IsString()
    screen_id: number;
}