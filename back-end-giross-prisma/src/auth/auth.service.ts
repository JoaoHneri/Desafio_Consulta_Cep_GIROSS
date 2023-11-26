import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/entities/user.entity';
import { UserPayload } from './models/UserPayload';
import { JwtService } from '@nestjs/jwt/dist';
import { UserToken } from './models/UserToken';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly JwtService: JwtService,
  ) {}
  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }
    throw new Error('Email ou senha invalidos');
  }

  login(user: User): UserToken {
    const playload: UserPayload = {
      sub: user.id,
      email: user.email,
      name: user.name,
      id: user.id,
    };

    const jwtToken = this.JwtService.sign(playload);

    return {
      access_token: jwtToken,
      name: user.name,
      email: user.email,
      id: user.id,
    };
  }
}
