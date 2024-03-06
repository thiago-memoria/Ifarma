import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCardDto } from "src/dto/card/create-card.dto";
import { CardEntity } from "src/entities/card.entity";
import { Repository } from "typeorm";

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(CardEntity)
    private cardRepository: Repository<CardEntity>,
  ){}

  async create(data: CreateCardDto) {

    const card = this.cardRepository.create(data);

    return this.cardRepository.save(card);

  }

  findAll() {
    return this.cardRepository.find();
  }

  async findOne(id: number) {
    await this.exists(id);

    return this.cardRepository.findOneBy({
      id,
    });
  }

  async remove(id: number) {
    await this.exists(id);

    await this.cardRepository.delete(id);

    return true;
  }

  async exists(id: number){
    if(
      !(await this.cardRepository.exist({
        where: {
          id,
        },
      }))
    ){
      throw new NotFoundException(`O Cartao com o ${id} não existe.`);
    }
  }

}