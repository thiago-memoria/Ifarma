import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingController } from 'src/controllers/shopping.controller';
import { ShoppingEntity } from 'src/entities/shopping.entity';
import { ShoppingService } from 'src/services/shopping.service';



@Module({
  imports: [
    TypeOrmModule.forFeature([ShoppingEntity])
  ],


  controllers: [ShoppingController],
  providers: [ShoppingService],
  exports: [ShoppingService]
})
export class ShoppingModule {}
