import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
    ) {}

    async createNewUser(createUserDto: CreateUserDto): Promise<void> {
        const user = User.create(createUserDto);
        await user.save();
    }

    async showByEmail(email: string): Promise<User | undefined> {
        const user = await this.usersRepository.findOne({ email: email });
        delete user.password;

        return user;
    }

    async findByEmail(email: string): Promise<User | undefined> {
        return await this.usersRepository.findOne({ where: {email: email} });
    }

    async findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }
}