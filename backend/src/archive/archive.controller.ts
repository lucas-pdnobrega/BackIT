import { Body, Controller, Get, Post, Param, Delete, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ArchiveService } from './archive.service';
import { CreateArchiveDTO, ArchiveParamIdDTO, QueryArchiveDTO } from './archive.dto';
import { UserService } from 'src/user/user.service';
import { Archive as ArchiveModel } from '@prisma/client';
import { Express } from 'express';


@Controller('archive')
export class ArchiveController {
    constructor(
        private readonly archiveService: ArchiveService,
        private readonly userService: UserService
    ) {}

    @Get(':id')
    getArchiveById(@Param() params: ArchiveParamIdDTO): Promise<ArchiveModel | null> {
        const res = this.archiveService.archive(
            { id: params.id}
        );
        return res;
    }

    @Get()
    getArchiveByQuery(@Query() query: QueryArchiveDTO): Promise<ArchiveModel[] | null> {
        return this.archiveService.filterArchives(query);
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadArchive(
        @UploadedFile() file: Express.Multer.File,
        @Body() archiveData: CreateArchiveDTO
    ): Promise<ArchiveModel> {
        if (!file) {
            throw new Error('Arquivo não encontrado');
        }

        return this.archiveService.uploadArchive(file, archiveData);
    }

    @Delete(':id')
    deleteArchive(
        @Param() params: ArchiveParamIdDTO
    ): Promise<ArchiveModel | null> {
        return this.archiveService.deleteArchive({id: params.id});
    }
}
