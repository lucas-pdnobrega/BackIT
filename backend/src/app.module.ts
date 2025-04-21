import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { PrismaService } from './prisma.service';
import { ArchiveController } from './archive/archive.controller';
import { ArchiveService } from './archive/archive.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
//import { HttpModule } from '@nestjs/axios';
import { ArchivematicaController } from './archivematica/archivematica.controller';
import { ArchivematicaService } from './archivematica/archivematica.service';

@Module({
imports: [
	ConfigModule.forRoot({isGlobal: true}),
	JwtModule.register({
				global: true,
				secret: process.env.SECRET_KEY,
				signOptions: { expiresIn: '1d'}
			}),
	//HttpModule
],
controllers: [
	AppController,
	UserController,
	ArchiveController,
	ArchivematicaController,
	AuthController,
],
providers: [
	AppService,
	AuthService,
	ArchiveService,
	ArchivematicaService,
	UserService,
	PrismaService,
	{
	provide: APP_GUARD,
	useClass: AuthGuard
	}
]
})
export class AppModule {}
