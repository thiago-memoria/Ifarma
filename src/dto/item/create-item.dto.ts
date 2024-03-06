import { IsDate, IsNumber, IsObject, IsString } from "class-validator";
import { CreateShoppingDTO } from "../shopping/create-shopping.dto";
import { CreateProductDTO } from "../product/create-product.dto";
import { CreateWalletDto } from "../wallet/create-wallet.dto";
import { CreateShoppingRequestDto } from "../shoppingRequest/create-shopping-request.dto";

export class CreateItemDto {

    @IsNumber()
    quantity: number;
  
    @IsDate()
    createdAt: Date;
  
    @IsString()
    price: number;
  
    @IsObject()
    product: CreateProductDTO;
  
    @IsObject()
    shopping: CreateShoppingDTO;

    @IsObject()
    shoppingRequest: CreateShoppingRequestDto;

  }