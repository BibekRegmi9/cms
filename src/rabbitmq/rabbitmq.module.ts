import { Module } from '@nestjs/common';
import { ConsumerService } from './queueConsumers';
import { ProducerService } from './queueProducers';


@Module({
    providers: [ProducerService, ConsumerService],
    exports: [ProducerService],
  })
  export class RabbitMQModule {}