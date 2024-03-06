import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsNumber, IsObject, IsString } from "class-validator";
import { AddressDto } from "../address/address.dto";

export class CreateWalletDto {
    @ApiProperty({
      example: 'Pedro',
      description: 'Nome do titular da conta',
    })
    @IsString()
    holder: string;
  
    @ApiProperty({
      example:
        '{"logradouro": "Rua x", "numero": "123", "bairro": "Centro", "cep":"60822630", "cidade":"Fortaleza"}',
      description: 'Rua onde o titular vive',
    })
    @IsObject()
    address: AddressDto;
  
    @ApiProperty({
      example: '01-12-2023',
      description: 'Data de nascimento do titular',
    })
    @IsString()
    birthAt: Date;
  
    @ApiProperty({
      example: 'Caixa',
      description: 'Banco da conta informada',
    })
    @IsString()
    bank: string;
  
    @ApiProperty({
      example: 'Fortaleza',
      description: 'Cidade da agencia bancaria',
    })
    @IsString()
    cityAgency: string;
  
    @ApiProperty({
      example: '9879-87',
      description: 'numero da agencia',
    })
    @IsString()
    numberAgency: string;
  
    @ApiProperty({
      example: '7845-8',
      description: 'numero da conta bancaria',
    })
    @IsString()
    accountNumber: string;
  
    @ApiProperty({
      example: 'CORRENTE',
      description: 'tipo de conta bancaria',
    })
    @IsString()
    typeAccount: string;
  
    @ApiProperty({
      example: '954095649',
      description: 'cpf ou cpnj do titular',
    })
    @IsString()
    cpf_cnpj: string;
  
    @ApiProperty({
      example: 'PIX',
      description: 'Tipo de pagamente a ser realizado',
    })
    @IsString()
    typePayment: string;
  
    @ApiProperty({
      example: '99848762194',
      description: 'pix do titular',
    })
    @IsString()
    pix: string;

    @ApiProperty({
        example: '200',
        description: 'saldo'
    })
    @IsNumber()
    balance: number;

    @ApiProperty({
        example: 'true',
        description: 'A conta está ativa',
    })
    @IsBoolean()
    isActive: boolean;

    @ApiProperty({
        example: '22/12/2023',
        description: 'Data de criação',
    })
    @IsDate()
    createdAt?: Date;

    @ApiProperty({
        example: '22/12/2023',
        description: 'Data de Atualização',
    })
    @IsDate()
    updatedAt?: Date;

  }