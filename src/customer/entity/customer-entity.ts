import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity({name: 'customers'})
export class CustomerEntity{

    @ObjectIdColumn()
    id: ObjectId;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    createdAt: Date;

    @Column()
    updateAt: Date;

}