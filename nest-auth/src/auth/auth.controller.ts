import { Controller, UseGuards, Request, Post} from '@nestjs/common';
import { Public } from 'src/decorator/skip-auth.decorator';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    // 앞서 전역 가드에 의하여 모든 경로에 대한 접근이 제한 됩니다.
    // 그렇지만, login 경로는 공개된 경로여야하기 때문에 공개된 경로를 위하여 custom decorator를 만듭니다.
    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
    // JWT를 생성하고 리턴하는 코드
    return this.authService.login(req.user);
    }
}