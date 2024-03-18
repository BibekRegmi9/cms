import { ApiProperty } from "@nestjs/swagger";


export class BaseCustomer{
    @ApiProperty()
    id?: string;

    @ApiProperty()
    username?: string;

    @ApiProperty()
    email?: string;

    @ApiProperty()
    password?: string;

    @ApiProperty()
    confirmPassword?: string;

    @ApiProperty()
    designation?: string;

}