import { InjectQueue } from "@nestjs/bull";
import { Injectable } from "@nestjs/common";
import { Queue } from "bull";

@Injectable()
export class QueueService{
    constructor(
        @InjectQueue('my-queue') private readonly  mailQueue: Queue,
        
    ){}


    async addJob(){
        const data = [
            'anish 002',
            'jit 001',
            'maybe baybe'
        ]

        await this.mailQueue.add('send-mail', data);
    }

    async addJobSendSalary(){
        const data = [
            'Jit   | 95 kpm',
            'Mit   | 65 kpm',
            'Harry | 25 kpm',
            'Marry | 10 kpm',
            'Terry | 15 kpm',
            'Berry | 30 kpm',
            'Larry | 40 kpm',
            'Garry | 45 kpm',
            'Jerry | 55 kpm',
        ]
        await this.mailQueue.add('send-salary', data)
    }

}