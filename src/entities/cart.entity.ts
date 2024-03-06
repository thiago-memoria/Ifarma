
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    OneToMany
  } from 'typeorm';
import { UserEntity } from './user.entity';


@Entity({
    name: 'cart',
  })
export class CartEntity {

    @PrimaryGeneratedColumn({
        unsigned: true,
      })
      id?: number;

      @Column()
      value: string;  

      @OneToOne(() => UserEntity, (userEntity) => userEntity.cartEntity,
      {
        eager: true,
        cascade: true
      })
      user: UserEntity

}
