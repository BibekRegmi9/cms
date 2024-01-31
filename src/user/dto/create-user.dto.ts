import { IsBoolean, IsDate, IsEmail, IsEmpty, IsNotEmpty, IsNumberString, IsString } from "class-validator";

export class CreateUserDto {
    
    @IsBoolean()
    is_active: boolean;

    @IsBoolean()
    is_permanent: boolean;

    @IsString()
    @IsNotEmpty({ message: 'Please Enter First Name' })
    first_name_en: string;

    @IsString()
    @IsEmpty()
    middle_name_en: string;

    @IsString()
    @IsNotEmpty({ message: 'Please Enter Last Name' })
    last_name_en: string;

    @IsString()
    @IsEmpty()
    first_name_np: string;

    @IsString()
    @IsEmpty()
    middle_name_np: string;

    @IsString()
    @IsEmpty()
    last_name_np: string;

    @IsEmail()
    @IsNotEmpty({message: 'Email is required'})
    email: string;

    @IsString()
    @IsNotEmpty({message: 'Password is required'})
    password: string;

    @IsString()
    @IsEmpty()
    contact_no: number;

    @IsString()
    @IsEmpty()
    profile_pic: string;

    @IsBoolean()
    is_password_changed: boolean;

    @IsString()
    gender: string;

    @IsString()
    @IsEmpty()
    user_type: string;

    @IsString()
    @IsEmpty()
    detail_status: string;

    @IsString()
    pan_no: string;

    @IsString()
    citizenship_no: string;

    @IsDate()
    birth_date: string;

    @IsNumberString()
    telephone_no: string;

    @IsString()
    fax: string;
}
