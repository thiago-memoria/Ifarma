import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToOne,
    ManyToMany,
    JoinTable,
    OneToMany
  } from 'typeorm';
import { ItemEntity } from './item.entity';
import { UserEntity } from './user.entity';
import { ShoppingRequestEntity } from './shopping-request.entity';

@Entity({
    name: 'shoppings',
})
export class ShoppingEntity{

    @PrimaryGeneratedColumn({
        unsigned: true,
      })
      id?: number;

    @Column()
    value: string;
    
    @Column()
    storeAddress: string;

    @Column()
    deliveryAddress: string;

    @Column()
    deliveryTime: string;

    @OneToMany(() => ItemEntity, (itemEntity) => itemEntity.shoppingEntity,{
      eager: true,
      cascade: true
    })
    @JoinTable()
    itemEntity: ItemEntity[]

    @ManyToOne(() => UserEntity, (userEntity) => userEntity.shoppingEntity,{
      eager: true,
      cascade: true
    })
    userEntity: UserEntity

    @OneToOne(() => ShoppingRequestEntity,
    {
      eager: true,
      cascade: true
    })
    shoppingEntity: ShoppingRequestEntity
}
