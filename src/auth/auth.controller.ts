import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Public } from './public-strategy';
import { BaseCustomer } from 'src/customer/dto/base-customer.dto';

@Controller('auth')
@ApiTags("auth")
export class AuthController {
    constructor (private authService: AuthService){}
    @Public()
    @HttpCode(HttpStatus.OK)
    @Post("login")
    @ApiOperation({ summary: "User Login" })
    @ApiResponse({
    status: 200,
    description: "The record found",
    type: [BaseCustomer],
  })
    signIn(@Body() signInDto: Record<string, any>) {
        return this.authService.signIn(signInDto.email, signInDto.password);
    }

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post("signup")
    @ApiOperation({ summary: "User Signup" })
    @ApiResponse({
        status: 200,
        description: "The record found",
        type: [BaseCustomer],
    })
    signUp(@Body() signUpDto: Record<string, any>) {
        const payload = {
          username: signUpDto.username, 
          email: signUpDto.email, 
          password: signUpDto.password,
          createdAt: new Date()
        }
        return this.authService.signUp(payload);
    }
}
