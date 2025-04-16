/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { PrismaService } from './prisma.service';
// import { ArchiveService } from './archive/archive.service';

@Module({
  imports: [ConfigModule.forRoot(
    {
      isGlobal: true
    },
  )],
  controllers: [
    AppController,
    UserController
  ],
  providers: [
    AppService,
    // ArchiveService,
    UserService,
    PrismaService
  ]
})
export class AppModule {}
