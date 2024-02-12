import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResultantAreaService } from './resultant-area.service';
import { CreateResultantAreaDto } from './dto/create-resultant-area.dto';
import { UpdateResultantAreaDto } from './dto/update-resultant-area.dto';

@Controller('resultant-area')
export class ResultantAreaController {
  constructor(private readonly resultantAreaService: ResultantAreaService) {}

  @Post()
  create(@Body() createResultantAreaDto: CreateResultantAreaDto) {
    const resultantArea =  this.resultantAreaService.create(createResultantAreaDto);
    return resultantArea;
  }

  @Get()
  findAll() {
    const resultantArea = this.resultantAreaService.findAll();
    return resultantArea;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const resultantArea =  this.resultantAreaService.findOne(+id);
    return resultantArea;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResultantAreaDto: UpdateResultantAreaDto) {
    const resultantArea =  this.resultantAreaService.update(+id, updateResultantAreaDto);
    return resultantArea;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resultantAreaService.remove(+id);
  }
}
