import { ProductoType } from 'src/DB/entity/Producto';
import { TrabajadorType } from 'src/DB/entity/Trabajador';
import { FacturaType as IFactura } from '../../DB/entity/Factura';

export class Factura implements IFactura {
  id: number;
  fecha: Date;
  productosVendidos: ProductoType[];
  vendedor: TrabajadorType;
}
