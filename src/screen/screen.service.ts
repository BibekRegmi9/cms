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
        const query = `
        WITH temp AS (
            SELECT 
                p."name",
                mp."module_id" AS "moduleId",
                JSON_AGG(
                    JSON_BUILD_OBJECT(
                        'modulePriviligeId', mp.id,
                        'priviligeId', p.id,
                        'endpoint', mp.end_point
                    )
                ) AS details 
            FROM 
                module_privilege mp
             
            INNER JOIN privileges p ON p.id = mp."privilegeId"
            GROUP BY 1, 2
        ),
        temps AS (
            SELECT 
                t."moduleId",
                m."name",
                JSON_AGG(
                    JSON_BUILD_OBJECT(
                        'details', t.details,
                        'name', t.name
                    )
                ) AS privileges 
            FROM 
                temp t 
            INNER JOIN modules m ON m.id = t."moduleId"
            GROUP BY 1, 2
        )
        SELECT 
            s.name AS "screenName",
            JSON_AGG(t.*)  as details
        FROM 
            temps t
        INNER JOIN modules m ON m.id = t."moduleId"
        INNER JOIN screen s ON s.id = m.screen_id
        GROUP BY 1;
        `;

        const fetchScreenwithModuleAndPrivilege = await this.screenRepository.query(query);
        return fetchScreenwithModuleAndPrivilege;
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
