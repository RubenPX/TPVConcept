import { ProductoType } from 'src/DB/entity/Producto';
import { TrabajadorType } from 'src/DB/entity/Trabajador';
import { Factura } from '../entities/factura.entity';

export class CreateFacturaDto implements Omit<Factura, 'id'> {
  fecha: Date;
  productosVendidos: ProductoType[];
  vendedor: TrabajadorType;
}
