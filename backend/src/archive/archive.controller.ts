import {
    Body, 
    Controller,
    Get,
    Post,
    Param,
    Delete,
    Query
} from '@nestjs/common';
import { Archive as ArchiveModel} from '@prisma/client';
import { ArchiveService} from './archive.service';
import { CreateArchiveDTO, ArchiveParamIdDTO, QueryArchiveDTO } from './archive.dto';
import { UserService } from 'src/user/user.service';


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

    @Post()
    async createArchive(
        @Body() archiveData: CreateArchiveDTO
    ): Promise<ArchiveModel | null> {
        return this.archiveService.createArchive(archiveData);
    }

    @Delete(':id')
    deleteArchive(
        @Param() params: ArchiveParamIdDTO
    ): Promise<ArchiveModel | null> {
        return this.archiveService.deleteArchive({id: params.id});
    }
}
