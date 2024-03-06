import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemController } from "src/controllers/item.controller";
import { ItemEntity } from "src/entities/item.entity";
import { ItemService } from "src/services/item.service";

@Module({
    imports: [
      TypeOrmModule.forFeature([ItemEntity])
    ],
  
    controllers: [ItemController],
    providers: [ItemService],
    exports: [ItemService],
  })
  export class ItemModule {}