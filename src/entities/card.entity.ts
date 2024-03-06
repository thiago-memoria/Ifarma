import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { WalletEntity } from "./wallet.entity";

@Entity({
    name: 'cards',
})
export class CardEntity{

    @PrimaryGeneratedColumn({
        unsigned: true,
      })
      id?: number;

    @Column()
    cardNumber: string;

    @Column()
    expirationDate: string;

    @Column()
    cvv: string;

    @Column()
    cpf_cnpj: string;

    @Column()
    cardNickname: string;

    @ManyToOne(() => WalletEntity, (walletEntity) => walletEntity.cardEntity,
    {
        eager: true,
        cascade: true
      })
    walletEntity: WalletEntity;
}