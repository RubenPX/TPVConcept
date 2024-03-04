import { ProductoDB, type ProductoType } from "./Producto";
import { trabajadoresDB, type trabajadoresType } from "./Trabajadores";

export type FacturaType = {
  id: number;
  fecha: Date;
  productosVendidos: ProductoType[];
  vendedor: trabajadoresType;
};

export const FacturasDB: FacturaType[] = [
  {
    id: 0,
    fecha: new Date(),
    productosVendidos: [ ProductoDB[0], ProductoDB[1], ProductoDB[2] ],
    vendedor: trabajadoresDB[2]
  },
  {
    id: 1,
    fecha: new Date(),
    productosVendidos: [ ProductoDB[3], ProductoDB[1], ProductoDB[4] ],
    vendedor: trabajadoresDB[1]
  },
  {
    id: 2,
    fecha: new Date(),
    productosVendidos: [ ProductoDB[1], ProductoDB[4], ProductoDB[2] ],
    vendedor: trabajadoresDB[1]
  }
]
