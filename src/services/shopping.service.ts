import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateShoppingDTO } from 'src/dto/shopping/create-shopping.dto';
import { UpdateShoppingDto } from 'src/dto/shopping/update-shopping.dto';
import { ShoppingEntity } from 'src/entities/shopping.entity';
import { Repository } from 'typeorm';




@Injectable()
export class ShoppingService {
  constructor(
    @InjectRepository(ShoppingEntity)
    private shoppingRepository: Repository<ShoppingEntity>,
  ){}

  async create(data: CreateShoppingDTO) {
    const shopping = this.shoppingRepository.create(data);
    return this.shoppingRepository.save(shopping);
  }

  findAll() {
    return this.shoppingRepository.find();
  }

  async findOne(id: number) {
    await this.exists(id);

    return this.shoppingRepository.findOneBy({
      id,
    });
  }

  async update(id: number, {value, storeAddress, deliveryAddress, deliveryTime}: UpdateShoppingDto) {
        await this.exists(id);

        await this.shoppingRepository.update(id, {
          value, 
          storeAddress, 
          deliveryAddress, 
          deliveryTime,
        });

        return this.findOne(id);
  }

  async updatePartial(
    id: number,
    {value, storeAddress, deliveryAddress, deliveryTime}: UpdateShoppingDto,
  ){
    await this.exists(id);

    const data: any = {};

    if(value){
      data.value = value;
    }
    
    if(storeAddress){
      data.storeAddress = storeAddress;
    }

    if(deliveryAddress){
      data.deliveryAddress = deliveryAddress;
    }

    if(deliveryTime){
      data.deliveryTime = deliveryTime;
    }

    await this.shoppingRepository.update(id, data);

    return this.findOne(id);

  }

  async remove(id: number) {
    await this.exists(id);

    await this.shoppingRepository.delete(id);

    return true;
  }

  async exists(id: number){
    if(
      !(await this.shoppingRepository.exist({
        where: {
          id,
        },
      }))
    ){
      throw new NotFoundException(`A compra com o ${id} não existe.`);
    }
  }


}
