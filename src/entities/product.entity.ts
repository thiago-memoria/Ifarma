import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    ManyToMany,
    OneToMany,
  } from 'typeorm';
import { CartEntity } from './cart.entity';
import { ShoppingEntity } from './shopping.entity';
import { ShoppingRequestEntity } from './shopping-request.entity';
import { ItemEntity } from './item.entity';


  @Entity({
    name: 'product',
  })  
  export class ProductEntity {

    @PrimaryGeneratedColumn({
        unsigned: true,
      })
      id?: number;

    @Column()
    description: string;
    
    @Column()
    price: string;

    @Column()
    kind: string;

    @Column()
    discount: boolean;

    @OneToMany(() => ItemEntity, (itemEntity) => itemEntity.productEntity)
    itemEntity: ItemEntity; 
}
