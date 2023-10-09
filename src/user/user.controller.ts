import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('/users')
export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  @Get()
  async listUsers() {
    const data = await this.userRepository.list();

    return data;
  }

  @Post()
  async addUser(@Body() userData: CreateUserDto) {
    this.userRepository.save(userData);

    return userData;
  }
}
