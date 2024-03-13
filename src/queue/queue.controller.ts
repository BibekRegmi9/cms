import { Controller, Get, Param } from "@nestjs/common";
import { QueueService } from "./queue.service";

@Controller('queue')

export class QueueController{
    constructor(private readonly queueService: QueueService){}

    @Get('mail')
    async queue(){
        await this.queueService.addJob();

        return "ykkk"
    }

    @Get('salary')
    async salaryQueue(){
        await this.queueService.addJobSendSalary();
        return "Done..........."
    }

}