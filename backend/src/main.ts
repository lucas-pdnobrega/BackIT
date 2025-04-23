import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true
  }));

  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  const dbPort = process.env.NESTJS_API_PORT || 8000;
  await app.listen(dbPort, '0.0.0.0');
}
bootstrap();
