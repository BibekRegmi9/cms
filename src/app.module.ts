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
      entities: [User, Role, UserRoleMapping ],
      synchronize: true
    }),
    UserModule,
    RoleModule,
    UserRoleModule,
  
  TypeOrmModule.forFeature([UserRoleMapping])],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
