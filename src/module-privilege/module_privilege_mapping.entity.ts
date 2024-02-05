import { CommonEntity } from "src/common/common.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Module_Ent } from "src/modules/entities/module.entity";
import { Privilege } from "src/privileges/entities/privileges.entity";


@Entity('module_privilege')
export class ModulePrivilegeMapping extends CommonEntity{
    
    @Column()
    module_id: number;

    @ManyToOne(() => Module_Ent)
    @JoinColumn({
      referencedColumnName: 'id',
      foreignKeyConstraintName: 'module_id',
    })
    module: Module_Ent;




    @Column()
    privilege_id: number;

    @ManyToOne(()=> Privilege)
    @JoinColumn({
        referencedColumnName: 'id',
        foreignKeyConstraintName: 'privilege_id'
    })
    privilege: Privilege;

    @Column()
    method: string;

    @Column()
    end_point: string;

    
}
