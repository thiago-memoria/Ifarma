import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from '@nestjs/common';
import * as dotenv from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())

  const config = new DocumentBuilder()
  .setTitle('Farmacia Virtual')
  .setDescription('Ifarma')
  .setVersion('1.0')
  .addTag('users')
  .addTag('cart')
  .addTag('shopping')
  .addTag('product')
  .addTag('shoppingRequest')
  .addTag('address')
  .addTag('wallet')
  .addTag('cards')
  .addTag('item')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
