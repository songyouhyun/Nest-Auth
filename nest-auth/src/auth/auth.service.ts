import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entity/users.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService,
    ) {}

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findByEmail(email);
        if(user && user.validatePassword(password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
    
    async login(user: User) {
        const payload = { userId: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
