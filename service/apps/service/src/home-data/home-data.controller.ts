import { VideoDown } from '@libs/db/models/video_down.model';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HomeDataService } from './home-data.service';

@ApiTags('首页数据')
@Controller()
export class HomeDataController {
  constructor(private readonly homeDataService: HomeDataService) {}
  @Get('home-data')
  getData() {
    return this.homeDataService.getClassifyTree();
  }

  @Get('foot-data')
  getFootData() {
    return this.homeDataService.getFootData();
  }
  @Get('menu')
  getMenu() {
    return this.homeDataService.getTree('2');
  }
  @Get('links')
  getLinks() {
    return this.homeDataService.getLinks();
  }
  @Get('footLinks')
  getFootLinks() {
    return this.homeDataService.getFootLinks();
  }
  @Get('site')
  getSiteInfo() {
    return this.homeDataService.getWebSite();
  }
  @Get('head-other')
  getHeadOther() {
    return this.homeDataService.getHeaderOther();
  }
  @Get('home-video')
  getHomeVideo(){
    return this.homeDataService.getHomeVideo()
  }
}
