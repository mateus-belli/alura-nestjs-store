import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { v4 as uuid } from 'uuid';
import { ListUserDto } from './dto/list-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('/users')
export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  @Get()
  async listUsers() {
    const userInRepository = await this.userRepository.list();

    const userEntityList = userInRepository.map(
      (user) => new ListUserDto(user.id, user.name),
    );

    return userEntityList;
  }

  @Post()
  async addUser(@Body() userData: CreateUserDto) {
    const userEntity = new UserEntity();

    Object.assign(userEntity, userData);

    userEntity.id = uuid();

    this.userRepository.save(userEntity);

    return {
      data: new ListUserDto(userEntity.id, userEntity.name),
      message: 'User created successfuly',
    };
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() userData: UpdateUserDto) {
    const userEntity = await this.userRepository.update(id, userData);

    return {
      data: userEntity,
      message: 'User updated successfully',
    };
  }

  @Delete('/:id')
  async removeUser(@Param('id') id: string) {
    await this.userRepository.delete(id);

    return {
      message: ' User deleted successfully',
    };
  }
}
