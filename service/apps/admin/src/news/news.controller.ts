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
import { NewsService } from './news.service';
import { News, NewsDto, NewsQueryDto } from '@libs/db/models/news.model';

@Controller('news')
@ApiTags('新闻')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}
  @Put('changeStatus')
  changeStatus(@Body() body: { status: number; _id: string }) {
    return this.newsService.changeStatus(body);
  }
  @Post()
  create(@Body() createNewsType: News) {
    return this.newsService.create(createNewsType);
  }

  @Get()
  findAll(@Query() query: NewsQueryDto) {
    return this.newsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateNewsDto: NewsDto) {
    return this.newsService.update(id, updateNewsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsService.remove(id);
  }
}
