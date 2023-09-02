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
import { GoodsVideoService } from './goods-video.service';
import { GoodsVideo, GoodsVideoDot } from '@libs/db/models/goods_video.model';

@Controller('goods-Videos')
@ApiTags('新闻类型')
export class GoodsVideoController {
  constructor(private readonly goodsVideoService: GoodsVideoService) {}

  @Post()
  create(@Body() createGoodsVideo: GoodsVideo) {
    return this.goodsVideoService.create(createGoodsVideo);
  }

  @Get()
  findAll(@Query() query) {
    return this.goodsVideoService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.goodsVideoService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateGoodsVideoDto: GoodsVideoDot) {
    return this.goodsVideoService.update(id, updateGoodsVideoDto);
  }

  @Delete('removeMany')
  removeMany(@Query() Param) {
    return this.goodsVideoService.removeMany(Param.ids);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.goodsVideoService.remove(id);
  }
}
