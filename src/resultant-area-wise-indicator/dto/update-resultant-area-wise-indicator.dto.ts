import { PartialType } from "@nestjs/mapped-types";
import { CreateResultantAreaWiseIndicatorDto } from "./create-resultant-area-wise-indicator.dto";


export class UpdateResultantAreaWiseIndicatorDto extends PartialType(CreateResultantAreaWiseIndicatorDto){

}