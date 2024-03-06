import { PartialType } from '@nestjs/swagger';
import { CreateShoppingRequestDto } from './create-shopping-request.dto';

export class UpdateShoppingRequestDto extends PartialType(CreateShoppingRequestDto) {}
