import { BaseCustomer } from "./base-customer.dto";

export class UpdateCustomerDto extends BaseCustomer{
    updatedAt: Date;
}