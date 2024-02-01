import { Module } from '@nestjs/common';
import { PrivilegeService } from './privilege.service';
import { PrivilegeController } from './privilege.controller';

@Module({
  providers: [PrivilegeService],
  controllers: [PrivilegeController]
})
export class PrivilegeModule {
    
}
