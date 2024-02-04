import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';

@Controller('modules')
export class ModulesController {
    constructor (private readonly moduleService: ModulesService){}

    @Post()
    async create(@Body() createModuleDto: CreateModuleDto){
        const module = await this.moduleService.createModule(createModuleDto);
        return module;
    }


    @Get()
    async findAll(){
        const module = await this.moduleService.getAll();
        return module;
    }


    @Get(':id')
    async findOne(@Param('id') id: string){
        const module = await this.moduleService.getOne(+id);
        return module;
    }
    

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateModuleDto: UpdateModuleDto){
        const module = await this.moduleService.update(+id ,updateModuleDto);
        return module;
    }


    @Delete(':id')
    async delete(@Param('id') id: string){
        await this.moduleService.delete(+id);
    }
}


