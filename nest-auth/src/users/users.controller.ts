import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Public } from 'src/decorator/skip-auth.decorator';

import { CreateUserDto } from '../dto/create-user.dto';
import { User } from './entity/users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Post()
  createNewUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createNewUser(createUserDto);
  }

  @Get(':email')
  showByEmail(@Param('email') email: string) {
    return this.usersService.showByEmail(email);
  }

  @Get(':id')
  showById(@Param('id') id: number) {
    return this.usersService.showById(id);
  }
  

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.usersService.remove(id);
  }

  @Public()
  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
