import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { WalletController } from "src/controllers/wallet.controler";
import { WalletEntity } from "src/entities/wallet.entity";
import { WalletService } from "src/services/wallet.service";

@Module({
    imports: [
      TypeOrmModule.forFeature([WalletEntity])
    ],
  
    controllers: [WalletController],
    providers: [WalletService],
    exports: [WalletService],
  })
  export class WalletsModule {}