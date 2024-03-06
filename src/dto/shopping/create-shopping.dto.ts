import { IsObject, IsString } from 'class-validator';
import { CreateUserDto } from '../user/create-user.dto';
import { CreateProductDTO } from '../product/create-product.dto';
import { AddressDto } from '../address/address.dto';
import { CreateShoppingRequestDto } from '../shoppingRequest/create-shopping-request.dto';

export class CreateShoppingDTO {

    @IsObject()
    user: CreateUserDto;

    @IsObject()
    shoppingRequest: CreateShoppingRequestDto;
    
    @IsObject()
    product: CreateProductDTO[];

    @IsString()
    value: string;

    @IsString()
    storeAddress: string;
    
    @IsString()
    deliveryAddress: string;

    @IsString()
    deliveryTime: string;

}
