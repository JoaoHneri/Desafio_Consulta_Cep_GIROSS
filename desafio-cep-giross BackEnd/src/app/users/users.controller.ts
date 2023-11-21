import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseUUIDPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async index() {
    return await this.usersService.findAll();
  }
  @Post()
  async store(@Body() body: CreateUserDto) {
    return await this.usersService.store(body);
  }
  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.usersService.findOneBy(id);
  }
  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateUserDto,
  ) {
    return await this.usersService.update(id, body);
  }
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.usersService.destroy(id);
  }
}
