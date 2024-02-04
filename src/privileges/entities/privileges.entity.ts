import { CommonEntity } from "src/common/common.entity";
import { Column, Entity } from "typeorm";

@Entity({name: 'privileges'})
export class Privilege extends CommonEntity{

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    code: string;
}