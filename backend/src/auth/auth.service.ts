import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TrabajadoresService } from 'src/trabajadores/trabajadores.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: TrabajadoresService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const trabajador = await this.usersService.findOne(username);
    if (trabajador?.pass !== pass) throw new UnauthorizedException();
    const payload = { sub: trabajador.id, username: trabajador.nombre };
    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
