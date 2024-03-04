import { Module } from '@nestjs/common';
import { TrabajadoresService } from './trabajadores.service';
import { TrabajadoresController } from './trabajadores.controller';

@Module({
  providers: [TrabajadoresService],
  exports: [TrabajadoresService],
  controllers: [TrabajadoresController],
})
export class TrabajadoresModule {}
