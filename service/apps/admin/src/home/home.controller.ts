import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { HomeService } from './home.service';
import { Banner, BannerDot } from '@libs/db/models/banner.model';
import { ApiTags } from '@nestjs/swagger';
import { Classify, ClassifyDot } from '@libs/db/models/classify.model';

@Controller('home')
@ApiTags('首页板块')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get('banner')
  getBanner() {
    return this.homeService.getBanner();
  }
  @Post('banner')
  createBanner(@Body() createBannerDto: Banner) {
    return this.homeService.createBanner(createBannerDto);
  }
  @Put('banner/:id')
  updateBanner(@Body() updateBannerDto: BannerDot) {
    return this.homeService.updateBanner(updateBannerDto);
  }
  @Delete('banner/:id')
  deleteBanner(@Body('id') id: string) {
    return this.homeService.deleteBanner(id);
  }
  @Get('classify/list')
  getClassifyList(@Query() query) {
    return this.homeService.getClassifyList(query);
  }
  @Post('classify')
  createClassify(@Body() createClassify: Classify) {
    return this.homeService.createClassify(createClassify);
  }
  @Get('classify')
  getClassify(@Query() query) {
    return this.homeService.getClassify(query);
  }
  @Get('classify/tree')
  getClassifyTree(@Query() query: { pid: string }) {
    return this.homeService.getClassifyTree(query.pid);
  }
  @Put('classify/:id')
  updateClassify(@Body() updateClassifyDto: ClassifyDot) {
    return this.homeService.updateClassify(updateClassifyDto);
  }
  @Get('classify/:id')
  getOneClassify(@Param('id') id: string) {
    return this.homeService.getClassifyById(id);
  }
  @Delete('classify/:id')
  deleteClassify(@Param('id') id: string) {
    return this.homeService.deleteClassify(id);
  }
}
