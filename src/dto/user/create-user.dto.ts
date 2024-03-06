import {
    IsString,
    IsEmail,
    MinLength,
    IsOptional,
    IsDateString,
    IsObject,
    IsEnum,
  } from 'class-validator';
import { CreateCartDto } from '../cart/create-cart.dto';
import { CreateShoppingDTO } from '../shopping/create-shopping.dto';
import { CreateWalletDto } from '../wallet/create-wallet.dto';
import { Role } from 'src/enum/role.enum';
import { AddressDto } from '../address/address.dto';
import { CreateShoppingRequestDto } from '../shoppingRequest/create-shopping-request.dto';


export class CreateUserDto {

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsOptional()
  @IsDateString()
  birthAt?: string;

  @IsOptional()
  @IsEnum(Role)
  role?: number;

  @IsObject()
  cart: CreateCartDto;

  @IsObject()
  wallet: CreateWalletDto;

  @IsObject()
  addres: AddressDto;

  @IsObject()
  shoppingRequest: CreateShoppingRequestDto;

  @IsObject()
  shopping: CreateShoppingDTO;
}
