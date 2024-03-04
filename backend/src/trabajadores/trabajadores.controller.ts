import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { TrabajadoresService } from './trabajadores.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('trabajadores')
export class TrabajadoresController {
  constructor(private trabajadoresService: TrabajadoresService) {}

  @Get()
  @UseGuards(AuthGuard)
  index(): any {
    return this.trabajadoresService.getAll();
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
