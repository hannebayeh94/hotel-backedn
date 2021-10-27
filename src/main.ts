import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";
import * as dotev from 'dotenv';


const bootstrap = async () => {

  dotev.config();

  const options = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    "credentials":true
  }

  const app = await NestFactory.create(AppModule);
  app.enableCors(options);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 7000, () => {
    console.log('Conectado en el puerto:' + process.env.PORT);
  });
};

bootstrap();
