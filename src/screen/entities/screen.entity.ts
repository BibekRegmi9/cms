import { CommonEntity } from "src/common/common.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Screen extends CommonEntity{
    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    code: string;

}