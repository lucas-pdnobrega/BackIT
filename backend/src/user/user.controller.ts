import {
    Body, 
    Controller,
    Get,
    Post,
    Param
} from '@nestjs/common';
import { User as UserModel} from '@prisma/client';
import { UserService} from './user.service';


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get(':id')
    getUserById(
        @Param('id') id: number): Promise<UserModel | null> {
        const res = this.userService.user(
            { id: Number(id)}
        );
        return res;
    }

    @Get()
    getUser(
        @Param() many: boolean = false, @Body() queryData: { id?: number; email?: string }
    ): Promise<UserModel | UserModel[] | null> {
        const { id, email } = queryData;
        const res = many? 
        this.userService.users(
            {
                where: { id, email }
            }
        ) : this.userService.user({ id, email });
        return res;
    }

    @Post()
    signupUser(
        @Body() userData: { email:string; password:string }
    ): Promise<UserModel> {
        const { email, password } = userData;
        return this.userService.createUser({ email, password });
    }
}
