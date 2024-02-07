import { CommonEntity } from "src/common/common.entity";
import { ModulePrivilegeMapping } from "src/module-privilege/module_privilege_mapping.entity";
import { Role } from "src/role/entities/role.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";



@Entity({name: 'accesses'})
export class Accesses extends CommonEntity{

    @Column({default: true})
    is_permanent: boolean;


    
    @Column({nullable: false})
    module_privilege_id: number;
    @ManyToOne(() => ModulePrivilegeMapping)
    @JoinColumn({name: 'module_privilege_id', referencedColumnName: 'id', foreignKeyConstraintName: 'module_privilege_id'})
    modulePrivilegeMapping: ModulePrivilegeMapping;


    @Column({nullable: false})
    role_id: number;
    @ManyToOne(() => Role)
    @JoinColumn({name: 'role_id', referencedColumnName: 'id', foreignKeyConstraintName: 'role_id'})
    role: Role;

}