import { IsBoolean, IsString } from "class-validator";

export class CreateResultantAreaDto {
    
    @IsString()
    created_by: string;

    @IsString()
    updated_by: string;

    @IsString()
    outcome: string;

    @IsBoolean()
    is_permanent: Boolean;
}
