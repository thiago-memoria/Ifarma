import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateWalletDto } from "src/dto/wallet/create-wallet.dto";
import { WalletEntity } from "src/entities/wallet.entity";
import { Repository } from "typeorm";

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(WalletEntity)
    private walletRepository: Repository<WalletEntity>,
  ){}

  async create(data: CreateWalletDto) {

    const user = this.walletRepository.create(data);

    return this.walletRepository.save(user);

  }

  findAll() {
    return this.walletRepository.find();
  }

  async findOne(id: number) {
    await this.exists(id);

    return this.walletRepository.findOneBy({
      id,
    });
  }

  
  async remove(id: number) {
    await this.exists(id);

    await this.walletRepository.delete(id);

    return true;
  }

  async exists(id: number){
    if(
      !(await this.walletRepository.exist({
        where: {
          id,
        },
      }))
    ){
      throw new NotFoundException(`O usuário ${id} não existe.`);
    }
  }

}