import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { RoleModule } from './role/role.module';
import { Role } from './role/entities/role.entity';
import { UserRoleModule } from './user-role/user-role.module';
import { UserRoleMapping } from './user-role/user_role_mapping.entity';
import { ModulesModule } from './modules/modules.module';
import { Module_Ent } from './modules/entities/module.entity';
import { ScreenModule } from './screen/screen.module';
import { Screen } from './screen/entities/screen.entity';
import { PrivilegesModule } from './privileges/privileges.module';
import { Privilege } from './privileges/entities/privileges.entity';
import { ModulePrivilegeModule } from './module-privilege/module-privilege.module';
import { ModulePrivilegeMapping } from './module-privilege/module_privilege_mapping.entity';
import { AccessesService } from './accesses/accesses.service';
import { AccessesModule } from './accesses/accesses.module';
import { Accesses } from './accesses/entities/accesses.entity';
import { ApprovalJourneyService } from './approval-journey/approval-journey.service';

@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: 'postgres',
      // host: process.env.POSTGRES_HOST,
      // port: +process.env.PORT,
      // username: process.env.POSTGRES_USER,
      // password: process.env.POSTGRES_PASSWORD,
      // database: process.env.POSTGRES_DATABASE,
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'secretpassword',
      database: 'postgres',
      entities: [User, Role, UserRoleMapping, Module_Ent, Screen, Privilege, ModulePrivilegeMapping, Accesses],
      synchronize: true,
    }),
    
    UserModule,
    RoleModule,
    UserRoleModule,
    ModulesModule,
    ScreenModule,
    PrivilegesModule,
    ModulePrivilegeModule,
    AccessesModule,
  ],
  controllers: [AppController],
  providers: [AppService, ApprovalJourneyService],
})
export class AppModule {}
