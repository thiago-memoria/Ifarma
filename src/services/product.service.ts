import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDTO } from 'src/dto/product/create-product.dto';
import { UpdateProductDto } from 'src/dto/product/update-product.dto';
import { ProductEntity } from 'src/entities/product.entity';
import { Repository } from 'typeorm';



@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ){}

  async create(data: CreateProductDTO) {
    const product = this.productRepository.create(data);
    return this.productRepository.save(product);
  }

  findAll() {
    return this.productRepository.find();
  }

  async findOne(id: number) {
    await this.exists(id);

    return this.productRepository.findOneBy({
      id,
    });
  }

 async update(id: number, {description, price, kind, discount}: UpdateProductDto) {
    await this.exists(id);

    await this.productRepository.update(id, {
      description, 
      price, 
      kind, 
      discount
    });

    return this.findOne(id);
  }

  async updatePartial(
    id: number,
    {description, price, kind, discount}: UpdateProductDto,
  ){
    await this.exists(id);

    const data: any = {};

    if(description){
      data.description = description;
    }

    if(price){
      data.price = price;
    }

    if(kind){
      data.kind = kind;
    }

    if(discount){
      data.discount = discount;
    }

    await this.productRepository.update(id, data);

    return this.findOne(id);
  }

  async remove(id: number) {
    await this.exists(id);

    await this.productRepository.delete(id);

    return true;
  }

  async exists(id: number){
    if(
      !(await this.productRepository.exist({
        where: {
          id,
        },
      }))
    ){
      throw new NotFoundException(`O produto com o ${id} não existe.`);
    }
  }
}
