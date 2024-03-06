import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ShoppingRequestEntity } from "./shopping-request.entity";
import { ShoppingEntity } from "./shopping.entity";
import { ProductEntity } from "./product.entity";

@Entity({
    name:'item',
})
export class ItemEntity{

    @PrimaryGeneratedColumn({
        unsigned: true,
      })
      id?: number;
     
    @Column()
    quantity: number;
    
    @CreateDateColumn()
    createdAt?: Date;

    @Column()
    price: number;

    @ManyToOne(() => ProductEntity, (productEntity) => productEntity.itemEntity,{
      eager: true,
      cascade: true
  })
    productEntity: ProductEntity;
    
    @ManyToOne(() => ShoppingEntity, (shoppingEntity) => shoppingEntity.itemEntity,{
      eager: true,
      cascade: true
    })
    shoppingEntity: ShoppingEntity;

    @ManyToOne(() => ShoppingRequestEntity, (shoppingRequestEntity) => shoppingRequestEntity.itemEntity,{
        eager: true,
        cascade: true
    })
    shoppingRequestEntity: ShoppingRequestEntity;
}