import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateShoppingRequestDto } from 'src/dto/shoppingRequest/create-shopping-request.dto';
import { UpdateShoppingRequestDto } from 'src/dto/shoppingRequest/update-shopping-request.dto';
import { ShoppingRequestService } from 'src/services/shopping-request.service';

@ApiTags('shoppingRequest')
@Controller('shopping-request')
export class ShoppingRequestController {
  constructor(private readonly shoppingRequestService: ShoppingRequestService) {}

  @Post()
  create(@Body() createShoppingRequestDto: CreateShoppingRequestDto) {
    return this.shoppingRequestService.create(createShoppingRequestDto);
  }

  @Get()
  findAll() {
    return this.shoppingRequestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shoppingRequestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShoppingRequestDto: UpdateShoppingRequestDto) {
    return this.shoppingRequestService.update(+id, updateShoppingRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shoppingRequestService.remove(+id);
  }
}
