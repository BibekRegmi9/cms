import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from './entity/customer-entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CustomerEntity])
  ],
  providers: [CustomerService],
  exports: [CustomerService]
})
export class CustomerModule {}
