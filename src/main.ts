import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000,()=>{
    console.log("=====================================>")
    console.log('Running at Port:3000')
    console.log("=====================================>")

  });
}
bootstrap();
