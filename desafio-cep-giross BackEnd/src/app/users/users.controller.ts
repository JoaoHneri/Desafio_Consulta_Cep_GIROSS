import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async index() {
    return this.usersService.findAll();
  }
  @Post()
  async store(@Body() body: CreateUserDto) {
    return this.usersService.store(body);
  }
  @Get(':id')
  async show() {
    return null;
  }
  @Put(':id')
  async update() {
    return null;
  }
  @Delete(':id')
  async delete() {
    return null;
  }
}
