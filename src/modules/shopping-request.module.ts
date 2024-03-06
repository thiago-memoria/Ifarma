import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingRequestController } from 'src/controllers/shopping-request.controller';
import { ShoppingRequestEntity } from 'src/entities/shopping-request.entity';
import { ShoppingRequestService } from 'src/services/shopping-request.service';


@Module({
imports: [
  TypeOrmModule.forFeature([ShoppingRequestEntity])
],

  controllers: [ShoppingRequestController],
  providers: [ShoppingRequestService],
})
export class ShoppingRequestModule {}
