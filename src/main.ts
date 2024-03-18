import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { CustomerModule } from './customer/customer.module';
import { AuthModule } from './auth/auth.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger setup
  const config = new DocumentBuilder()
  .setTitle('Customer Authentication ') //the title you want for your swagger docs
  .setDescription('Customer Authentication API description') //description
  .setVersion('1.0')  //version setting for the docs
  .build();
  const document = SwaggerModule.createDocument(app, config, {
  include: [CustomerModule, AuthModule], //the modules that you want to include in your swagger docs
  });
  SwaggerModule.setup('api', app, document); // if you want your docs to open up at a different endpoint, you can replace 'api' with endpoint of your choice


  await app.listen(3005,()=>{
    console.log("===========================================================================================================================>")
    console.log('Running at Port:3005')
    console.log("===========================================================================================================================>")
  });
  
}
bootstrap();
