import {  IsDate, IsEmail, IsNumberString, IsString } from "class-validator";

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
