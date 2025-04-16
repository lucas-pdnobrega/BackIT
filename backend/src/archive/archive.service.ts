import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Archive, Prisma } from '@prisma/client';

@Injectable()
export class ArchiveService {
    constructor(private prisma: PrismaService) {}

    async archive(
        archiveWhereUniqueInput: Prisma.ArchiveWhereUniqueInput,
    ): Promise<Archive | null> {
        return this.prisma.archive.findUnique({
            where: archiveWhereUniqueInput,
        });
    }

    async archives(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.ArchiveWhereUniqueInput;
        where?: Prisma.ArchiveWhereInput;
        orderBy?: Prisma.ArchiveOrderByWithRelationInput;
        }): Promise<Archive[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.archive.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
        }

    async createArchive(data: Prisma.ArchiveCreateInput): Promise<Archive> {
        return this.prisma.archive.create({
            data,
        });
    }

    async updateArchive(params: {
        where: Prisma.ArchiveWhereUniqueInput;
        data: Prisma.ArchiveUpdateInput;
        }): Promise<Archive> {
        const { where, data } = params;
        return this.prisma.archive.update({
            data,
            where,
        });
    }

    async deleteArchive(where: Prisma.ArchiveWhereUniqueInput): Promise<Archive> {
        return this.prisma.archive.delete({
            where,
        });
    }

}
