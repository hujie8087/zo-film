import { Controller, Get, Query } from '@nestjs/common';
import { NewsService } from './news.service';
import { Crud } from 'nestjs-mongoose-crud';
import { News } from '@libs/db/models/news.model';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: News,
})
@ApiTags('新闻')
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}
}
