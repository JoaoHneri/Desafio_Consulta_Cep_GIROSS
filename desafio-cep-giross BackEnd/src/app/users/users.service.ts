import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersEntity } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
  ) {}

  async findAll() {
    return await this.usersRepository.find({
      select: ['id', 'firstName', 'lastName', 'email'],
    });
  }
  async findOneBy(id: string) {
    try {
      return await this.usersRepository.findOneBy({ id });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
  async store(data: CreateUserDto) {
    const user = this.usersRepository.create(data);
    return await this.usersRepository.save(user);
  }

  async update(id: string, data: UpdateUserDto) {
    const user = await this.usersRepository.findOneBy({ id });
    this.usersRepository.merge(user, data);
    return await this.usersRepository.save(user);
  }
  async destroy(id: string) {
    await this.usersRepository.findOneBy({ id });
    this.usersRepository.softDelete({ id });
  }
}
