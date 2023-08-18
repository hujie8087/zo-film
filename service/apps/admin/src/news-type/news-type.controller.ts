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
import { NewsType, NewsTypeDto } from '@libs/db/models/newsType.model';

@Controller('news-type')
@ApiTags('新闻类型')
export class NewsTypeController {
  constructor(private readonly newsTypeService: NewsTypeService) {}
  @Put('changeStatus')
  changeStatus(@Body() body: { status: number; _id: string }) {
    return this.newsTypeService.changeStatus(body);
  }
  @Post()
  create(@Body() createNewsType: NewsType) {
    return this.newsTypeService.create(createNewsType);
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
  update(@Param('id') id: string, @Body() updateNewsTypeDto: NewsTypeDto) {
    return this.newsTypeService.update(id, updateNewsTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsTypeService.remove(id);
  }
}
