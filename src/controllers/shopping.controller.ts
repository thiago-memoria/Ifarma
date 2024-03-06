import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateShoppingDTO } from 'src/dto/shopping/create-shopping.dto';
import { UpdateShoppingDto } from 'src/dto/shopping/update-shopping.dto';
import { ShoppingService } from 'src/services/shopping.service';


@ApiTags('shopping')
@Controller('shopping')
export class ShoppingController {
  constructor(private readonly shoppingService: ShoppingService) {}

  @Post()
  create(@Body() CreateShoppingDTO: CreateShoppingDTO) {
    return this.shoppingService.create(CreateShoppingDTO);
  }

  @Get()
  findAll() {
    return this.shoppingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shoppingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShoppingDto: UpdateShoppingDto) {
    return this.shoppingService.update(+id, updateShoppingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shoppingService.remove(+id);
  }
}
