import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NewsTypeService } from './news-type.service';
import { NewsType } from '@libs/db/models/newsType.model';

@Controller('news-type')
@ApiTags('新闻类型')
export class NewsTypeController {
  constructor(private readonly newsTypeService: NewsTypeService) {}

  @Post()
  create(@Body() createArticleTag: NewsType) {
    return this.newsTypeService.create(createArticleTag);
  }

  @Get()
  findAll() {
    return this.newsTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsTypeService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateArticleTagDto: NewsType) {
    return this.newsTypeService.update(id, updateArticleTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsTypeService.remove(id);
  }
}
