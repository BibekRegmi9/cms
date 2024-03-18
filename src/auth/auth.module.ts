import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { CustomerModule } from 'src/customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from 'src/customer/entity/customer-entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth.constraints';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '1d'},
    }),
    CustomerModule,
    TypeOrmModule.forFeature([CustomerEntity])
  ],
  controllers: [AuthController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    AuthService],
  exports: [AuthService]
})
export class AuthModule {}
