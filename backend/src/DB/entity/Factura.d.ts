import { ProductoType } from './Producto';
import { TrabajadorType } from './Trabajador';

export type FacturaType = {
  id: number;
  fecha: Date;
  productosVendidos: ProductoType[];
  vendedor: TrabajadorType;
};
