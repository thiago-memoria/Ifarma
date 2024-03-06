import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartController } from 'src/controllers/cart.controller';
import { CartEntity } from 'src/entities/cart.entity';
import { CartService } from 'src/services/cart.service';



@Module({
  imports: [
    TypeOrmModule.forFeature([CartEntity])
  ],
  
  controllers: [CartController],
  providers: [CartService],
  exports: [CartService]
})
export class CartModule {}
