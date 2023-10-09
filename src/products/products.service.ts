import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { randomUUID } from 'crypto';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  async create(createProductDto: CreateProductDto) {
    const product = new Product();
    product.id = randomUUID();
    product.creationDate = new Date();
    product.updateDate = new Date();
    Object.assign(product, createProductDto);

    this.products.push(product);
  }

  async findAll() {
    return this.products;
  }

  async findOne(id: string) {
    return this.products.find((p) => p.id === id);
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = this.products.find((p) => p.id === id);

    product.updateDate = new Date();
    Object.assign(product, updateProductDto);
  }

  async remove(id: string) {
    const index = this.products.findIndex((p) => p.id === id);
    if (index <= -1) {
      return;
    }

    this.products.splice(index, 1);
  }
}
