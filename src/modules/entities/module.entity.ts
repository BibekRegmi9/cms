import { CommonEntity } from "src/common/common.entity";
import { Column, Entity } from "typeorm";

@Entity({name: 'modules'})
export class Module_Ent extends CommonEntity{

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({nullable: true})
    code: string;

    @Column({nullable: false})
    screen_id: number;

    
}