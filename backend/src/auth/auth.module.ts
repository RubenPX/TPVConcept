import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TrabajadoresModule } from 'src/trabajadores/trabajadores.module';
import { jwtConstants } from './constants/jwt';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TrabajadoresModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '5m' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
