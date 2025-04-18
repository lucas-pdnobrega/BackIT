import {
    Body, 
    Controller,
    Post,
} from '@nestjs/common';
import { UserService} from '../user/user.service';
import { AuthService } from './auth.service';
import { LoginDTO, TokenDTO } from './auth.dto';


@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly useService: UserService) {}

    @Post()
    logIn(
        @Body() loginData: LoginDTO
    ): Promise<TokenDTO> {
        return this.authService.authenticate(loginData);
    }
}
