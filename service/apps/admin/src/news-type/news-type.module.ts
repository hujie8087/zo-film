import { Module } from '@nestjs/common';
import { NewsTypeController } from './news-type.controller';
import { NewsTypeService } from './news-type.service';

@Module({
  controllers: [NewsTypeController],
  providers: [NewsTypeService],
})
export class NewsTypeModule {}
