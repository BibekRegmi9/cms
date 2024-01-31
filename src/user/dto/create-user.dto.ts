import { IsBoolean, IsDate, IsEmail, IsEmpty, IsNotEmpty, IsNumberString, IsString } from "class-validator";
import { Unique } from "typeorm";

export class CreateUserDto {
    
    @IsString()
    first_name_en: string;

    @IsString()
    last_name_en: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsString()
    contact_no: number;

    @IsString()
    citizenship_no: string;

    @IsDate()
    birth_date: string;

    @IsNumberString()
    telephone_no: string;

    @IsString()
    fax: string;
}
