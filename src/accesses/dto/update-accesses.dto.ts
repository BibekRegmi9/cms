import { PartialType } from "@nestjs/mapped-types";
import { CreateAccessesDto } from "./create-accesses.dto";

export class UpdateAccessesDto extends PartialType(CreateAccessesDto){
    
}