import { IsNumber, IsString } from "class-validator";

export class CreateModuleDto{

    @IsString()
    name: string;
    
    @IsString()
    description: string;

    @IsString()
    code: string;

    privileges: [{
        privilege_id: number,
        method: string,
        endpoint: string;
    }]

    @IsNumber()
    screen_id: number;

}