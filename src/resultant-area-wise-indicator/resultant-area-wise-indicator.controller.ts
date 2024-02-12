import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ResultantAreaWiseIndicatorService } from './resultant-area-wise-indicator.service';
import { CreateResultantAreaWiseIndicatorDto } from './dto/create-resultant-area-wise-indicator.dto';
import { UpdateResultantAreaWiseIndicatorDto } from './dto/update-resultant-area-wise-indicator.dto';

@Controller('resultant-area-wise-indicator')
export class ResultantAreaWiseIndicatorController {
    constructor(private readonly resultantAreaWiseIndicatorService: ResultantAreaWiseIndicatorService){}

    @Post()
    create(@Body() createResultantAreaWiseIndicatorDto: CreateResultantAreaWiseIndicatorDto){
        const resultantAreaWiseIndicator = this.resultantAreaWiseIndicatorService.create(createResultantAreaWiseIndicatorDto);
        return resultantAreaWiseIndicator;
    }

    @Get()
    findAll(){
        const resultantAreaWiseIndicator = this.resultantAreaWiseIndicatorService.findAll();
        return resultantAreaWiseIndicator;
    }


    @Get(':id')
    findOne(@Param('id') id: string){
        const resultantAreaWiseIndicator = this.resultantAreaWiseIndicatorService.findOne(+id);
        return resultantAreaWiseIndicator;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateResultantAreaWiseIndicatorDto: UpdateResultantAreaWiseIndicatorDto){
        const resultantAreaWiseIndicator = this.resultantAreaWiseIndicatorService.update(+id, updateResultantAreaWiseIndicatorDto);
        return resultantAreaWiseIndicator;
    }


    @Delete()
    delete(@Param('id')id: string){
        return this.resultantAreaWiseIndicatorService.remove(+id);
    }

}
