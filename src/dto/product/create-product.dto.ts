import { IsBoolean, IsString } from 'class-validator';

export class CreateProductDTO {

    @IsString()
    description: string;

    @IsString()
    price: string;

    @IsString()
    kind: string;

    @IsBoolean()
    discount: boolean;

}
