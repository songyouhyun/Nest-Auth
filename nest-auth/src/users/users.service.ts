import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
    ) {}

    async create(createUserDto: CreateUserDto) {
        const user = User.create(createUserDto);
        await user.save();
    }

    async showById(id: number): Promise<User> {
        const user = await this.usersRepository.findOne(id);
        delete user.password;
        delete user.id;
        delete user.createdAt;
        delete user.updatedAt;

        return user;
    }

    async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }
}