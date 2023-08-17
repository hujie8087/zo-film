import { Module } from '@nestjs/common';
import { NewsTypeService } from './news-type.service';
import { NewsTypeController } from './news-type.controller';

@Module({
  controllers: [NewsTypeController],
  providers: [NewsTypeService],
})
export class NewsTypeModule {}
