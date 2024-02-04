import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ScreenService } from './screen.service';
import { CreateScreenDto } from './dto/create-screen.dto';
import { UpdateScreenDto } from './dto/update-screen-dto';

@Controller('screen')
export class ScreenController {
    constructor(private readonly screenService: ScreenService){}

    @Post()
    async create(@Body() createScreenDto: CreateScreenDto){
        const screen = await this.screenService.createScreen(createScreenDto);
        return screen;
    }

    @Get()
    async findAll(){
        const screen = await this.screenService.findAll();
        return screen;
    }


    @Get(':id')
    async findOne(@Param('id') id: string){
        const screen = await this.screenService.findById(+id);
        return screen;
    }


    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateScreenDto: UpdateScreenDto){
        const screen = await this.screenService.update(+id, updateScreenDto);
        return screen;
    }


    @Delete(':id')
    async delete(@Param('id') id: string){
        await this.screenService.remove(+id);
    }
}
