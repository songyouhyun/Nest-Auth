import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService) {}

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.userService.find(email);
        if(user && user.validatePassword(pass)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
}
