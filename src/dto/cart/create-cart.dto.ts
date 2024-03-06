import { IsObject, IsString } from 'class-validator';
import { CreateUserDto } from '../user/create-user.dto';
import { CreateProductDTO } from '../product/create-product.dto';


export class CreateCartDto {

    @IsObject()
    user: CreateUserDto;
    
    @IsObject()
    product: CreateProductDTO[];

    @IsString()
    value: string;

}
