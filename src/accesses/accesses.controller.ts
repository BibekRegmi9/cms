import { Body, Controller, Post } from '@nestjs/common';
import { AccessesService } from './accesses.service';
import { CreateAccessesDto } from './dto/create-accesses.dto';

@Controller('accesses')
export class AccessesController {
    constructor (private readonly accessesService: AccessesService){}

    @Post()
    async create(@Body() createAccessesDto: CreateAccessesDto){
        const accesses = await this.accessesService.create(createAccessesDto);
        return accesses;
    }
}
