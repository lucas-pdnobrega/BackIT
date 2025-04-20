import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User, Prisma } from '@prisma/client';
import { QueryUserDTO } from './user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async user(
        userWhereUniqueInput: Prisma.UserWhereUniqueInput,
    ): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: userWhereUniqueInput,
        });
    }

    async users(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UserWhereUniqueInput;
        where?: Prisma.UserWhereInput;
        orderBy?: Prisma.UserOrderByWithRelationInput;
        }): Promise<User[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.user.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async filterUsers(query: QueryUserDTO): Promise<User[]> {
        const where: Prisma.UserWhereInput = {};
        
        if (query.email) {
            where.email = { contains: query.email, mode: 'insensitive' };
        }
        
        const orderBy = query.orderBy
            ? { [query.orderBy]: query.order ?? 'asc' }
            : undefined;
        
        return this.prisma.user.findMany({
            skip: query.skip,
            take: query.take,
            where,
            orderBy,
        });
    }

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        const saltOrRounds = parseInt(process.env.SALT_ROUNDS || '10');
        const hash = await bcrypt.hash(data.password, saltOrRounds);
        data.password = hash;

        return this.prisma.user.create({
            data,
        });
    }

    async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
        return this.prisma.user.delete({
            where,
        });
    }
}
