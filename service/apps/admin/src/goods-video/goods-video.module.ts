import { Module } from '@nestjs/common';
import { GoodsVideoController } from './goods-video.controller';
import { GoodsVideoService } from './goods-video.service';

@Module({
  controllers: [GoodsVideoController],
  providers: [GoodsVideoService],
})
export class GoodsVideoModule {}
