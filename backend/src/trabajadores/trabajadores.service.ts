import { Injectable } from '@nestjs/common';

type Trabajador = { userId: number; user: string; pass: string };

@Injectable()
export class TrabajadoresService {
  private readonly trabajadores: Trabajador[] = [
    {
      userId: 1,
      user: 'john',
      pass: 'changeme',
    },
    {
      userId: 2,
      user: 'maria',
      pass: 'guess',
    },
  ];

  async findOne(username: string): Promise<Trabajador | undefined> {
    return this.trabajadores.find((trabajador) => trabajador.user === username);
  }

  async getAll(): Promise<Omit<Trabajador, 'pass'>[]> {
    return this.trabajadores.map((t) => ({ user: t.user, userId: t.userId }));
  }
}
