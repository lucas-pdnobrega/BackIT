import {
    Body, 
    Controller,
    Post,
} from '@nestjs/common';
import { UserService} from '../user/user.service';
import { AuthService } from './auth.service';
import { LoginDTO, TokenDTO } from './auth.dto';
import { Public } from 'src/common/public.decorator';
import { CreateUserDTO } from 'src/user/user.dto';


@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly useService: UserService) {}

    @Public()
    @Post()
    logIn(
        @Body() loginData: LoginDTO
    ): Promise<TokenDTO> {
        return this.authService.authenticate(loginData);
    }

    @Public()
    @Post('signup')
    signup(
        @Body() signupData: CreateUserDTO
    ): Promise<TokenDTO> {
        return this.authService.signUp(signupData);
    }
}
