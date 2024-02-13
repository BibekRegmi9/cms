import { IsBoolean, IsString } from "class-validator";



export class CreateResultantAreaWiseIndicatorDto {

    @IsBoolean()
    is_permanent: boolean;

    @IsString()
    indicatorName: string;

    @IsString()
    description: string;

    @IsString()
    indicator_code: string;


}