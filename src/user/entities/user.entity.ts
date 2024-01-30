import { Column, Entity } from "typeorm";
import { CommonEntity } from "src/common/common.entity";

@Entity({name: 'users'})
export class User extends CommonEntity{


    @Column()
    first_name_en: string;

    @Column()
    middle_name_en: string;

    @Column()
    last_name_en: string;

    @Column()
    is_active: boolean;
    
    @Column()
    is_permanent: boolean;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    contact_no: number;

    @Column()
    profile_pic: string;

    @Column()
    is_password_changed: boolean;

    @Column()
    first_name_np: string;

    @Column()
    middle_name_np: string;

    @Column()
    last_name_np: string;

    @Column()
    gender: string;

    @Column()
    user_type: string;

    @Column()
    detail_status: string;

    @Column()
    pan_no: string;

    @Column()
    citizenship_no: string;

    @Column({ type: 'timestamp with time zone', nullable: true })
    birth_date: Date;


    @Column()
    telephone_no: string;

    @Column()
    fax: string;

    @Column()
    user_id: number;
}
