import { Entity } from 'typeorm';
import { TrabajadorType as ITrabajador } from 'src/DB/entity/Trabajador';

@Entity({ name: 'Trabajadores' })
export class Trabajador implements ITrabajador {
  id: number;
  nombre: string;
  apellido: string;
  pass: string;
}
