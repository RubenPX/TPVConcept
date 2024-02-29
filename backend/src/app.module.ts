import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TrabajadoresModule } from './trabajadores/trabajadores.module';

@Module({
  imports: [AuthModule, TrabajadoresModule],
})
export class AppModule {}
