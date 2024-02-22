import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClientService } from './prisma-client/prisma-client.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prismaService = app.get(PrismaClientService)
  await app.listen(3000);

  prismaService.enableShutdownHooks(app)
}
bootstrap();
