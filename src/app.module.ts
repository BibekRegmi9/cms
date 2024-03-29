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
import { ApprovalJourneyModule } from './approval-journey/approval-journey.module';
import { ResultantAreaModule } from './resultant-area/resultant-area.module';
import { ResultantArea } from './resultant-area/entities/resultant-area.entity';
import { ResultantAreaWiseIndicatorModule } from './resultant-area-wise-indicator/resultant-area-wise-indicator.module';
import { ResultantAreaWiseIndicator } from './resultant-area-wise-indicator/entities/create-resultant-area-wise-indicator.entity';
import { UploadedDocumentsModule } from './uploaded-documents/uploaded-documents.module';
import { BullModule } from '@nestjs/bull';
import { QueueModule } from './queue/queue.module';
import { EmailModule } from './email/email.module';
import { AuthModule } from './auth/auth.module';
import { CustomerModule } from './customer/customer.module';



@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: 'postgres',
      // host: process.env.POSTGRES_HOST,
      // port: +process.env.PORT,
      // username: process.env.POSTGRES_USER,
      // password: process.env.POSTGRES_PASSWORD,
      // database: process.env.POSTGRES_DATABASE,
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'cms_DB',
      entities: [User, Role, UserRoleMapping, Module_Ent, Screen, Privilege, ModulePrivilegeMapping, Accesses, ResultantArea, ResultantAreaWiseIndicator],
      synchronize: true,
    }),

    // BullModule.forRootAsync({
    //   useFactory: () => ({
    //     redis: {
    //       host: 'localhost',
    //       port: 6379,
    //     },
    //   }),
    // }),
    
    UserModule,
    RoleModule,
    UserRoleModule,
    ModulesModule,
    ScreenModule,
    PrivilegesModule,
    ModulePrivilegeModule,
    AccessesModule,
    ApprovalJourneyModule,
    ResultantAreaModule,
    ResultantAreaWiseIndicatorModule,
    UploadedDocumentsModule,
    QueueModule,
    EmailModule,
    AuthModule,
    CustomerModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
