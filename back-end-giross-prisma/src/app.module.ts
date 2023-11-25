import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaClient } from '@prisma/client';
import { CepModule } from './cep/cep.module';

@Module({
  imports: [PrismaModule, UserModule, AuthModule, PrismaClient, CepModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
