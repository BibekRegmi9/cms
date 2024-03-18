import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CustomerService } from 'src/customer/customer.service';
import { CreateCustomerDto } from 'src/customer/dto/create-customer.dto';

@Injectable()
export class AuthService {

    constructor (private customerService: CustomerService,
        private jwtService: JwtService){}

    async signIn(email:string, pass:string) {
        const user = await this.customerService.findOneBy(email);
        if (user?.password !== pass) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user.id, email: user.email };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }

    async signUp(payload: CreateCustomerDto){
        const user = await this.customerService.create(payload);
        return user;
    }
}
