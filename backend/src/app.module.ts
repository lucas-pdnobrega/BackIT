import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { PrismaService } from './prisma.service';
import { ArchiveController } from './archive/archive.controller';
import { ArchiveService } from './archive/archive.service';

@Module({
  imports: [ConfigModule.forRoot(
    {
      isGlobal: true
    },
  )],
  controllers: [
    AppController,
    UserController,
    ArchiveController
  ],
  providers: [
    AppService,
    ArchiveService,
    UserService,
    PrismaService
  ]
})
export class AppModule {}
