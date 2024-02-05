import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Screen } from './entities/screen.entity';
import { Repository } from 'typeorm';
import { CreateScreenDto } from './dto/create-screen.dto';
import { UpdateScreenDto } from './dto/update-screen-dto';

@Injectable()
export class ScreenService {
    constructor(
        @InjectRepository(Screen) private screenRepository: Repository<Screen>
    ){}

    async createScreen(createScreenDto: CreateScreenDto){
        const screen = this.screenRepository.create(createScreenDto);
        const savedScreen = await this.screenRepository.save(screen)
        return savedScreen;
    }

    async findAll(){
        const screen = this.screenRepository.find();
        return screen;
    }

    async findById(id: number){
        const screen = this.screenRepository.findOneBy({id});
        return screen;
    }

    async update(id: number, updateScreenDto: UpdateScreenDto){
        const screen = this.screenRepository.update({id},updateScreenDto);
        return screen;
    }

    async remove(id: number){
        await this.screenRepository.delete({id});
    }

    
}
