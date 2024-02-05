import { PartialType } from "@nestjs/mapped-types";
import { CreateModuleDto } from "./create-module.dto";

export class UpdateModuleDto extends PartialType(CreateModuleDto){
    
    privileges: [{
        id:number;
        privilege_id: number,
        method: string,
        endpoint: string;
    }]
}