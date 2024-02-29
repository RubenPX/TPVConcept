import { Injectable } from '@nestjs/common';
import { Trabajador as ITrabajador } from 'src/DB/entity/Trabajador';
import { Trabajadores as TrabajadoresDB } from 'src/DB/static/Trabajadores';
import { Trabajador } from './entities/trabajador.entity';

@Injectable()
export class TrabajadoresService {
  private readonly trabajadores: ITrabajador[] = TrabajadoresDB;

  async findOne(username: string): Promise<Trabajador | undefined> {
    return this.trabajadores.find((trabajador) => trabajador.user === username);
  }

  async getAll(): Promise<Omit<Trabajador, 'pass'>[]> {
    return this.trabajadores.map((t) => ({ user: t.user, userId: t.userId }));
  }
}
