import { CommonEntity } from "src/common/common.entity";
import { Screen } from "src/screen/entities/screen.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity({name: 'modules'})
export class Module_Ent extends CommonEntity{

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({unique: true})
    code: string;

    @Column({nullable: false})
    screen_id: number;

    @ManyToOne(() => Screen)
    @JoinColumn({name: 'screen_id', referencedColumnName: 'id', foreignKeyConstraintName:'screen_id'})
    screen: Screen;

    
}