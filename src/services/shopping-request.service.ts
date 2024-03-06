import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateShoppingRequestDto } from 'src/dto/shoppingRequest/create-shopping-request.dto';
import { UpdateShoppingRequestDto } from 'src/dto/shoppingRequest/update-shopping-request.dto';
import { ShoppingRequestEntity } from 'src/entities/shopping-request.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShoppingRequestService {
constructor(
  @InjectRepository(ShoppingRequestEntity)
  private shoppingRequestRepository: Repository<ShoppingRequestEntity>
){}

  async create(data: CreateShoppingRequestDto) {
   const shoppingRequest = this.shoppingRequestRepository.create(data);

   return this.shoppingRequestRepository.save(shoppingRequest);
   
  }

  findAll() {
    return this.shoppingRequestRepository.find();
  }

  async findOne(id: number) {
    await this.exists(id);

    return this.shoppingRequestRepository.findOneBy({
      id,
    });
  }

  async update(id: number, {requestShoppingStatus}: UpdateShoppingRequestDto) {
    await this.exists(id);

    await this.shoppingRequestRepository.update(id, {
      requestShoppingStatus,
    });

    return this.findOne(id);
}

async updatePartial(
id: number,
{requestShoppingStatus}: UpdateShoppingRequestDto,
){
await this.exists(id);

const data: any = {};

if(requestShoppingStatus){
  data.requestShoppingStatus = requestShoppingStatus;
}

await this.shoppingRequestRepository.update(id, data);

return this.findOne(id);

}

async remove(id: number) {
await this.exists(id);

await this.shoppingRequestRepository.delete(id);

return true;
}

async exists(id: number){
if(
  !(await this.shoppingRequestRepository.exist({
    where: {
      id,
    },
  }))
){
  throw new NotFoundException(`A requisição de compra com o ${id} não existe.`);
}
}
}
