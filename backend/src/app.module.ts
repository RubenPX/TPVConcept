import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TrabajadoresModule } from './trabajadores/trabajadores.module';
import { ProductosModule } from './productos/productos.module';
import { FacturasModule } from './facturas/facturas.module';

@Module({
  imports: [AuthModule, TrabajadoresModule, ProductosModule, FacturasModule],
})
export class AppModule {}
