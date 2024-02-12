import { CommonEntity } from "src/common/common.entity";
import { ResultantArea } from "src/resultant-area/entities/resultant-area.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity({name:'resultant-area-wise-indicator'})
export class ResultantAreaWiseIndicator extends CommonEntity{
    
    @Column()
    is_permanent: boolean;

    
    @ManyToOne(() => ResultantArea)
    @JoinColumn({
      referencedColumnName: 'id',
      foreignKeyConstraintName: 'resultant_area_id',
    })
    resultantArea: ResultantArea;

    @Column()
    task_execution_indicator: string;

    @Column()
    document_type: string;

    @Column()
    applicable_in_current_fiscal_year: boolean;

    @Column()
    indicator_code: string;

    @Column()
    approval_type: string;

    @Column()
    descriptor_file_location: string;
}