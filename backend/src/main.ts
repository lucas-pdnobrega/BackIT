import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const dbPort = process.env.NESTJS_API_PORT || 8000;
  await app.listen(dbPort, '0.0.0.0');
}
bootstrap();
