import { UserService } from "src/user/user.service";
import { LoginDTO, TokenDTO } from "./auth.dto";
import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import { CreateUserDTO } from "src/user/user.dto";

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    
    async authenticate(loginData: LoginDTO): Promise<TokenDTO> {
        const user = await this.userService.user({ email: loginData.email });

        if (user == null) throw new NotFoundException('E-mail not found.');

        const isMatch = await bcrypt.compare(loginData.password, user.password);

        if (!isMatch) throw new UnauthorizedException('Password is incorrect.');
        
        const payload = { sub: user.id, email: user.email };

        return {token: await this.jwtService.signAsync(payload)}
    }

    async signUp(signupData: CreateUserDTO): Promise<TokenDTO> {
        const userExist = await this.userService.user({ email: signupData.email });

        if (userExist != null) throw new BadRequestException('E-mail already registered.');

        const user = await this.userService.createUser(signupData);

        const payload = { sub: user.id, email: user.email};

        return {token: await this.jwtService.signAsync(payload)}
    }

}