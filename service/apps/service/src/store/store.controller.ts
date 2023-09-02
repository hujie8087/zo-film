import { Controller, Get, Query } from '@nestjs/common';
import { StoreService } from './store.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('store')
@ApiTags('门店管理')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}
  @Get()
  findStoreInfo() {
    return this.storeService.findStoreInfo();
  }
  @Get('region')
  findRegion(@Query() query: { pid: string }) {
    return this.storeService.findRegionList(query.pid);
  }
  @Get('list')
  findStoreList(@Query() query: { city: string; province: string }) {
    return this.storeService.findStoreList(query.city, query.province);
  }
}
