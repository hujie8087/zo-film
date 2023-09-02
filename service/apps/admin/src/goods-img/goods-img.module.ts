import { Module } from '@nestjs/common';
import { GoodsImgController } from './goods-img.controller';
import { GoodsImgService } from './goods-img.service';

@Module({
  controllers: [GoodsImgController],
  providers: [GoodsImgService],
})
export class GoodsImgModule {}
