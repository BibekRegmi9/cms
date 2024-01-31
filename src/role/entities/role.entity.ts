import { CommonEntity } from "src/common/common.entity";
import { Column, Entity } from "typeorm";

@Entity({name: 'roles'})
export class Role extends CommonEntity{
    @Column({nullable: true})
    created_by: string;

    @Column({nullable: true})
    updated_by: string;

    @Column({default: false})
    is_active: boolean;

    @Column({default: false})
    is_permanent: boolean;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({nullable:true})
    code: string;

    @Column()
    role_type: string;
    

    
}
