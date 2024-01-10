import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';
import { randomUUID } from 'crypto';

@Injectable()
export class ProductsService {
  private products: ProductEntity[] = [];

  async create(createProductDto: CreateProductDto) {
    const product = new ProductEntity();
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
    const productEntity = this.products.find((p) => p.id === id);

    if (!productEntity) {
      throw new Error('Product not found');
    }

    productEntity.updateDate = new Date();

    Object.assign(productEntity, updateProductDto);
  }

  async remove(id: string) {
    const index = this.products.findIndex((p) => p.id === id);

    if (index <= -1) {
      return;
    }

    this.products.splice(index, 1);
  }
}
