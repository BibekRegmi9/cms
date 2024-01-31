import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    const role =  this.roleService.create(createRoleDto);
    return role;
  }

  @Get()
  findAll() {
    const roles =  this.roleService.findAll();
    return roles;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const role =  this.roleService.findOne(+id);
    return role;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    const role =  this.roleService.update(+id, updateRoleDto);
    return role;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roleService.remove(+id);
  }
}
