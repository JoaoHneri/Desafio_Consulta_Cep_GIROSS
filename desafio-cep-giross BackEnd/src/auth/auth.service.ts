import { Injectable } from '@nestjs/common';
import { UsersEntity } from '../app/users/users.entity';
import { UsersService } from '../app/users/users.service';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user) {
    const payload = { sub: user.id, email: user.email };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string) {
    try {
      const user = await this.userService.findOneBy(email);

      const isPasswordValid = user && (await compare(password, user.password));

      if (!isPasswordValid) return null;

      return user;
    } catch (error) {
      // Registre o erro ou trate-o adequadamente
      console.error('Erro ao validar usuário:', error);
      return null;
    }
  }
}
