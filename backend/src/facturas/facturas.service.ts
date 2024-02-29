import { Injectable } from '@nestjs/common';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { UpdateFacturaDto } from './dto/update-factura.dto';
import { Factura } from './entities/factura.entity';

@Injectable()
export class FacturasService {
  create(createFacturaDto: CreateFacturaDto): Promise<Factura> {
    return 'This action adds a new factura';
  }

  findAll(): Promise<Factura[]> {
    return `This action returns all facturas`;
  }

  findOne(id: number): Promise<Factura> {
    return `This action returns a #${id} factura`;
  }

  update(id: number, updateFacturaDto: UpdateFacturaDto): Promise<Factura> {
    return `This action updates a #${id} factura`;
  }

  remove(id: number): Promise<Factura> {
    return `This action removes a #${id} factura`;
  }
}
