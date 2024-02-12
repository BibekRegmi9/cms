import { CommonEntity } from "src/common/common.entity";
import { Column, Entity } from "typeorm";

@Entity({name: 'uploaded-document'})
export class UploadedDocument extends CommonEntity{

    @Column({default: false})
    is_permanent: boolean;

    @Column()
    resultant_area_wise_indicator_id: number;

    @Column({nullable: true})
    quarter: number   

    @Column({nullable: true})
    fiscal_year_id: number

    @Column()
    district_id: number;

    @Column()
    file_location: string;

    @Column()
    data_fields: string;

    @Column()
    final_status: string;

    @Column()
    approval_type: string;


}
