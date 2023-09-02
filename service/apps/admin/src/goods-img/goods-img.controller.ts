import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GoodsImgService } from './goods-img.service';
import { GoodsImg, GoodsImgDot } from '@libs/db/models/goods_img.model';

@Controller('goods-imgs')
@ApiTags('产品图片')
export class GoodsImgController {
  constructor(private readonly goodsImgService: GoodsImgService) {}

  @Post()
  create(@Body() createGoodsImg: GoodsImg) {
    return this.goodsImgService.create(createGoodsImg);
  }

  @Get()
  findAll(@Query() query) {
    return this.goodsImgService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.goodsImgService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateGoodsImgDto: GoodsImgDot) {
    return this.goodsImgService.update(id, updateGoodsImgDto);
  }

  @Delete('removeMany')
  removeMany(@Query() Param) {
    return this.goodsImgService.removeMany(Param.ids);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.goodsImgService.remove(id);
  }
}
