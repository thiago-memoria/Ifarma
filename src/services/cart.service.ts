import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCartDto } from 'src/dto/cart/create-cart.dto';
import { UpdateCartDto } from 'src/dto/cart/update-cart.dto';
import { CartEntity } from 'src/entities/cart.entity';
import { Repository } from 'typeorm';


@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity)
    private cartRepository: Repository<CartEntity>,
  ){}

  async create(data: CreateCartDto) {
    
    const cart = this.cartRepository.create(data);

    return this.cartRepository.save(cart)

  }

  findAll() {
    return this.cartRepository.find();
  }

  async findOne(id: number) {
    await this.exists(id);

    return this.cartRepository.findOneBy({
      id,
    });
  }

  async update (id: number, {value}: UpdateCartDto) {
    await this.exists(id);

    await this.cartRepository.update(id,{
      value,
    });

    return this.findOne(id);
  }

  async updatePartial(
    id: number,
    {value}: UpdateCartDto
  ){
    await this.exists(id);

    const data: any = {};

    if(value){
      data.value = value;
    }

    await this.cartRepository.update(id, data);

    return this.findOne(id);

  } 

  async remove(id: number) {
    await this.exists(id);

    await this.cartRepository.delete(id);

    return true;
  }

  async exists(id: number){
    if(
      !(await this.cartRepository.exist({
        where: {
          id,
        },
      }))
    ){
      throw new NotFoundException(`O carrinho com o ${id} não existe.`);
    }
  }
}
