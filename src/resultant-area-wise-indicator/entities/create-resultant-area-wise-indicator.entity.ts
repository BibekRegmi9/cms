import { CommonEntity } from "src/common/common.entity";
import { ResultantArea } from "src/resultant-area/entities/resultant-area.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity({name:'resultant-area-wise-indicator'})
export class ResultantAreaWiseIndicator extends CommonEntity{

    
    @ManyToOne(() => ResultantArea)
    @JoinColumn({
      referencedColumnName: 'id',
      foreignKeyConstraintName: 'resultant_area_id',
    })
    resultantArea: ResultantArea;

    @Column({unique: true})
    name: string;

    @Column()
    description: string;

    @Column()
    indicator_code: string;

}