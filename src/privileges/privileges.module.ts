import { Module } from '@nestjs/common';
import { PrivilegesController } from './privileges.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrivilegesService } from './privileges.service';
import { Privilege } from './entities/privileges.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Privilege])],
  controllers: [PrivilegesController],
  providers: [PrivilegesService]
})
export class PrivilegesModule {}
