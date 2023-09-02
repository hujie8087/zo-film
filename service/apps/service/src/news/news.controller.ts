import { Controller, Get, Param, Query } from '@nestjs/common';
import { NewsService } from './news.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('新闻')
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}
  @Get('/list')
  findAll(@Query() query: { id: string }) {
    return this.newsService.findAll(query.id);
  }
  @Get('/manage')
  findManage() {
    return this.newsService.findManageData();
  }
  @Get('/detail/:id')
  findOne(@Param() params: { id: string }) {
    return this.newsService.findNewsInfo(params.id);
  }
}
