import { UserService } from "src/user/user.service";
import { LoginDTO, TokenDTO } from "./auth.dto";

export class AuthService {
    constructor(
        private readonly useService: UserService
    ) {}

    
    authenticate(loginData: LoginDTO): Promise<TokenDTO> {
        throw new Error('Method not implemented.');
    }

}