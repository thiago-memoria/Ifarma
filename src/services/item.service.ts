import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateItemDto } from "src/dto/item/create-item.dto";
import { ItemEntity } from "src/entities/item.entity";
import { Repository } from "typeorm";


@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(ItemEntity)
    private itemRepository: Repository<ItemEntity>,
  ){}

  async create(data: CreateItemDto) {
    const item = this.itemRepository.create(data);
    return this.itemRepository.save(item);
  }

  findAll() {
    return this.itemRepository.find();
  }

  async findOne(id: number) {
    await this.exists(id);

    return this.itemRepository.findOneBy({
      id,
    });
  }

  async remove(id: number) {
    await this.exists(id);

    await this.itemRepository.delete(id);

    return true;
  }

  async exists(id: number){
    if(
      !(await this.itemRepository.exist({
        where: {
          id,
        },
      }))
    ){
      throw new NotFoundException(`O produto com o ${id} não existe.`);
    }
  }
}