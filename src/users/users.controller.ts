import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDTO } from './dto/createUser.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('create')
  async create(
    @Body() createUserDto: CreateUserDTO,
    @Res() response: Response,
  ) {
    try {
      await this.usersService.create(createUserDto);

      return response
        .status(201)
        .send({ message: 'User added to the list successfully!' });
    } catch (error) {
      response.send({ message: error.detail });
      throw new Error(error.message);
    }
  }

  @Get()
  getUsers(): Promise<User[]> {
    const users = this.usersService.findAll();

    return users;
  }

  @Get(':id')
  getUserById(@Param('id') id: string): Promise<User> {
    const user = this.usersService.findById(id);

    return user;
  }
}
