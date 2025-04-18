import {
    Body, 
    Controller,
    Get,
    Post,
    Param,
    Delete,
    Query
} from '@nestjs/common';
import { User as UserModel} from '@prisma/client';
import { UserService} from './user.service';
import { CreateUserDTO, QueryUserDTO, UserParamIdDTO } from './user.dto';


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get(':id')
    getUserById(
        @Param() params: UserParamIdDTO): Promise<UserModel | null> {
        const res = this.userService.user(
            { id: params.id}
        );
        return res;
    }

    @Get()
    queryUsers(
        @Query() userData: QueryUserDTO
    ): Promise<UserModel | UserModel[] | null> {
        const res = this.userService.filterUsers(userData);
        return res;
    }

    @Post()
    createUser(
        @Body() userData: CreateUserDTO
    ): Promise<UserModel> {
        return this.userService.createUser(userData);
    }

    @Delete(':id')
    deleteUser(
        @Param() params: UserParamIdDTO
    ): Promise<UserModel | null> {
        return this.userService.deleteUser({id: params.id});
    }
}
