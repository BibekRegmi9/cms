import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PrivilegesService } from './privileges.service';
import { CreatePrivilegeDto } from './dto/create-privilege.dto';
import { UpdatePrivilegeDto } from './dto/update-privilege.dto';

@Controller('privileges')
export class PrivilegesController {
    constructor(private readonly privilegeService: PrivilegesService){}

    @Post()
    async create(@Body() createPrivilegeDto: CreatePrivilegeDto){
        const privilege = await this.privilegeService.createPrivilege(createPrivilegeDto);
        return privilege;
    }


    @Get()
    async findAll(){
        const privilege = await this.privilegeService.getAllPrivilege();
        return privilege;
    }


    @Get(':id')
    async findOne(@Param('id') id: string){
        const privilege = await this.privilegeService.getOnePrivilege(+id);
        return privilege;
    }


    @Patch(':id')
    async update(@Param('id') id: string, @Body() updatePrivilegeDto: UpdatePrivilegeDto){
        const privilege = await this.privilegeService.updatePrivilege(+id, updatePrivilegeDto);
        return privilege;
    }


    @Delete(':id')
    async delete(@Param('id') id: string){
        await this.privilegeService.deletePrivilege(+id);
    }

}
