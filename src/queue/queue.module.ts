import { BullModule } from "@nestjs/bull";
import { Module } from "@nestjs/common";
import { QueueService } from "./queue.service";
import { ProcessDataProcessor } from "./process-data.processor";
import { QueueController } from "./queue.controller";

@Module({
    imports: [
        BullModule.forRoot({
            redis: {
                host: 'localhost',
                port: 6379
            }
        }),
        BullModule.registerQueue({
            name: 'my-queue',

        }),
       
    ],
    controllers:[QueueController],
    providers:[QueueService, ProcessDataProcessor],
    exports: [QueueService]
})
export class QueueModule{}