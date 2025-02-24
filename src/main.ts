import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser'


async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  const config = new DocumentBuilder().setTitle('Block list').build()
  const docs = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, docs)

  app.use(cookieParser())


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
