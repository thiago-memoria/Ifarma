import { CreateProductDTO } from "../product/create-product.dto";
import { CreateShoppingDTO } from "../shopping/create-shopping.dto";
import { CreateUserDto } from "../user/create-user.dto";
import { IsDate, IsObject, IsString } from 'class-validator';

export class CreateShoppingRequestDto {

    @IsObject()
    shoppingRequest: CreateShoppingRequestDto;

    @IsObject()
    user: CreateUserDto;

    @IsObject()
    product: CreateProductDTO[];

    @IsDate()
    createdAt: Date;

    @IsString()
    requestShoppingStatus: string;   
    

}
