import { Column, Entity } from "typeorm";
import { CommonEntity } from "src/common/common.entity";

@Entity({name: 'users'})
export class User extends CommonEntity{


    @Column({nullable: false})
    first_name_en: string;

    @Column({nullable: true})
    middle_name_en: string;

    @Column({nullable: false})
    last_name_en: string;

    @Column({default:true})
    is_active: boolean;
    
    @Column({default:false})
    is_permanent: boolean;

    @Column({unique: true})
    email: string;

    @Column({nullable: false})
    password: string;

    @Column({unique: true})
    contact_no: number;

    @Column({default:null})
    profile_pic: string;

    @Column({default:false})
    is_password_changed: boolean;

    @Column({default:'male'})
    gender: string;


    @Column({ type: 'timestamp with time zone', nullable: true })
    birth_date: Date;


    @Column({nullable: true})
    telephone_no: string;

    @Column({nullable: true})
    fax: string;

    @Column({nullable: true})
    created_by: number;

    @Column({nullable: true})
    updated_by: number;

    @Column({default:null})
    user_id: number;
}
