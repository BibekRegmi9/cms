import { CommonEntity } from "src/common/common.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Role } from "../role/entities/role.entity";
import { User } from "src/user/entities/user.entity";

@Entity('user_role')
export class UserRoleMapping extends CommonEntity{
    

   

    @Column({default: false})
    is_permanent: boolean;

    @Column()
    user_id: number;

    @ManyToOne(()=>User)
    @JoinColumn({ referencedColumnName:'id',foreignKeyConstraintName:"user_id"})
    user: User;

    @Column()
    role_id: number;

    @ManyToOne(()=>Role)
    @JoinColumn({ referencedColumnName: "id",foreignKeyConstraintName:"role_id"})
    role: Role;

}