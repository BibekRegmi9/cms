import { CommonEntity } from "src/common/common.entity";
import { Column, Entity } from "typeorm";

@Entity({name: 'resultant_area'})
export class ResultantArea  extends CommonEntity{
    @Column({default: false})
    is_permanent: Boolean;

    @Column({nullable: true})
    created_by: string;

    @Column({nullable: true})
    updated_by: string;

    @Column()
    outcome: string;
}
