import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser'
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  const config = new DocumentBuilder()
    .setTitle('Block list')
    .addServer('/api')
    .build()


  

  const docs = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, docs)

  app.setGlobalPrefix('api',);
  app.use(cookieParser())
  app.useGlobalPipes(new ValidationPipe())


  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
});



  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
