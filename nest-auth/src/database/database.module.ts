import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from 'src/users/entity/user.entity';

const entities = [User];

@Module({
    imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
          type: 'mysql',
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_NAME'),
          entities: entities,
          synchronize: false,      // 애플리케이션에 작동할 때마다 DB Schema가 자동으로 만들어지게 할 것인가를 설정
        }),
      }),
    ]
})
export class DatabaseModule {}