import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerEntity } from './entity/customer-entity';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(CustomerEntity)
        private customerRepository: Repository<CustomerEntity>
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
