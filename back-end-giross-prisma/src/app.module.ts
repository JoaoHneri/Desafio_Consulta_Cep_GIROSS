import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaClient } from '@prisma/client';
import { CepModule } from './cep/cep.module';
import { ConsultaModule } from './consulta/consulta.module';
import { JwtAuthGuard } from './auth/guards/jwt.uth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    AuthModule,
    PrismaClient,
    CepModule,
    ConsultaModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
