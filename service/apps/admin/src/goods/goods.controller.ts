import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GoodsService } from './goods.service';
import { Good, GoodDot } from '@libs/db/models/good.model';

@Controller('goods')
@ApiTags('商品')
export class GoodsController {
  constructor(private readonly goodService: GoodsService) {}

  @Get('data')
  getData() {
    return this.goodService.getData();
  }

  @Get()
  findAll(@Query() query) {
    return this.goodService.findAll(query);
  }

  @Post()
  create(@Body() createGood: Good) {
    return this.goodService.create(createGood);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.goodService.findOne(id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateGood: GoodDot) {
    return this.goodService.update(id, updateGood);
  }
  @Delete('removeMany')
  removeMany(@Query() Param) {
    return this.goodService.removeMany(Param.ids);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.goodService.remove(id);
  }
}
