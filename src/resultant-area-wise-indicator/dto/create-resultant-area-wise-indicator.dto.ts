import { IsBoolean, IsString } from "class-validator";



export class CreateResultantAreaWiseIndicatorDto {

    @IsBoolean()
    is_permanent: boolean;

    @IsString()
    task_execution_indicator: string;

    @IsString()
    document_type: string;

    @IsBoolean()
    applicable_in_current_fiscal_year: boolean;

    @IsString()
    indicator_code: string;

    @IsString()
    approval_type: string;

    @IsString()
    descriptor_file_location: string;

}