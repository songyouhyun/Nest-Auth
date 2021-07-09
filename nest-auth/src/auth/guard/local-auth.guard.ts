//  auth.module 안에 있는 @UseGuards()은 데코레이터 안에 있는 해당 이름을 참조하여 passport-local 패키지에서 제공하는 코드와 연결. (passport 로컬 전략의 기본 이름은 'local'임)
//  AuthGuard 안에 현재 한개의 전략이 있지만 추가될 수 있음.

// 해당 전략이 여러개가 될 수 있기 때문에 따로 클래스를 만들어서 관리하는 편이 좋음

import { Injectable } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}