import { UserService } from "src/user/user.service";
import { LoginDTO, TokenDTO } from "./auth.dto";
import { NotFoundException, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import { Logger } from '@nestjs/common';

export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    
    async authenticate(loginData: LoginDTO): Promise<TokenDTO> {
        const user = await this.userService.user({ email: loginData.email });

        Logger.log(`${user}`)

        if (user == null) throw new NotFoundException('E-mail not found.');
        
        const saltOrRounds = parseInt(process.env.SALT_ROUNDS || '10');
        const hash = await bcrypt.hash(loginData.password, saltOrRounds);
        const isMatch = await bcrypt.compare(user.password, hash);

        if (!isMatch) throw new UnauthorizedException('Password is incorrect.');
        
        const payload = { sub: user.id, email: user.email };

        return {token: await this.jwtService.signAsync(payload)}
    }

}