import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductosService {
  create(createProductoDto: CreateProductoDto): Promise<Producto> {
    return 'This action adds a new producto';
  }

  findAll(): Promise<Producto[]> {
    return `This action returns all productos`;
  }

  findOne(id: number): Promise<Producto> {
    return `This action returns a #${id} producto`;
  }

  update(id: number, updateProductoDto: UpdateProductoDto): Promise<Producto> {
    return `This action updates a #${id} producto`;
  }

  remove(id: number): Promise<Producto> {
    return `This action removes a #${id} producto`;
  }
}
