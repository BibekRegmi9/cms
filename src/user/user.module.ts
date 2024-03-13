import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRoleMapping } from 'src/user-role/user_role_mapping.entity';
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailService } from 'src/email/email.service';
import { RabbitMQModule } from 'src/rabbitmq/rabbitmq.module';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserRoleMapping, ]), 
          RabbitMQModule],
  controllers: [UserController],
  providers: [UserService, EmailService],
})
export class UserModule {}
