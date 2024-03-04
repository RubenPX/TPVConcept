import { Injectable } from '@nestjs/common';
import { TrabajadorType } from 'src/DB/entity/Trabajador';
import { Trabajadores as TrabajadoresDB } from 'src/DB/static/Trabajadores';
import { Trabajador } from './entities/trabajador.entity';

@Injectable()
export class TrabajadoresService {
  private readonly trabajadores: TrabajadorType[] = TrabajadoresDB;

  async findOne(username: string): Promise<Trabajador | undefined> {
    return this.trabajadores.find((trabajador) => trabajador.nombre === username);
  }

  async getAll(): Promise<Omit<Trabajador, 'pass'>[]> {
    return this.trabajadores.map((t) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { pass, ...result } = t;
      return result;
    });
  }
}
