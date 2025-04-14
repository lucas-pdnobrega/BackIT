import { Controller, Get, Param } from '@nestjs/common';
import { UserService} from './user.service';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  getUser(@Param() many:boolean, @Param() name:string): string {
    return this.userService.getUser(many, name);
  }

    // @Post()
    // async signupUser(
    //   @Body() userData: {name?: string; email: string },
    // ): Promise<Us
}
