import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
    ManyToMany,
    JoinTable,
    ManyToOne,
    OneToMany,
  } from 'typeorm';
import { ShoppingEntity } from './shopping.entity';
import { ItemEntity } from './item.entity';
import { UserEntity } from './user.entity';

@Entity({
    name: 'shoppingRequest',
  })
export class ShoppingRequestEntity {

    @PrimaryGeneratedColumn({
        unsigned: true,
      })
      id?: number;

    @CreateDateColumn()
     createdAt?: Date;
    
    @Column()
     requestShoppingStatus: string;   
    
    @OneToOne(() => ShoppingEntity,
    {
      eager: true,
      cascade: true
    })
    @JoinColumn()
     shoppingEntity: ShoppingEntity

    @OneToMany(() => ItemEntity, (itemEntity) => itemEntity.shoppingRequestEntity,{
      eager: true,
      cascade: true
    })
    @JoinTable()
     itemEntity: ItemEntity[]

    @ManyToOne(() => UserEntity, (userEntity) => userEntity.shoppingRequestEntity,{
      eager: true,
      cascade: true
    })
     userEntity: UserEntity 
      

}
