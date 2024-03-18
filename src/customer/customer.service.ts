import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerEntity } from './entity/customer-entity';
import { MongoRepository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { setFlagsFromString } from 'v8';

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(CustomerEntity)
        private customerRepository: MongoRepository<CustomerEntity>
    ){}

    async findOneBy(email: string): Promise<CustomerEntity | undefined> {
        return await this.customerRepository.findOneBy({ email: email });
    }
    
    async create(createUserDto: CreateCustomerDto) {
        return this.customerRepository.save({
            ...createUserDto,
            createdAt: new Date(),
        });
    }
}
