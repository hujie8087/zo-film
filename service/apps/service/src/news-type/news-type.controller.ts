import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NewsTypeService } from './news-type.service';

@ApiTags('新闻类型')
@Controller('news-type')
export class NewsTypeController {
  constructor(private readonly newsTypeService: NewsTypeService) {}

  @Get('menu')
  async getNewsMenu() {
    return await this.newsTypeService.findNewsMenu();
  }
}
