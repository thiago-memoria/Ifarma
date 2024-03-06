import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    OneToMany
  } from 'typeorm';

@Entity({
    name: 'category',
})
export class CategoryEntity {

    @PrimaryGeneratedColumn({
        unsigned: true,
      })
      id?: number;

      @Column()
      name: string;
      
      @Column()
      description: string;

}