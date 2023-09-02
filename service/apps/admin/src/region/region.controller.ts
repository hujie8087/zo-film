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
import { RegionService } from './region.service';
import { ApiTags } from '@nestjs/swagger';
import { Region, RegionDot } from '@libs/db/models/region.model';

@Controller('region')
@ApiTags('地区管理')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @Get('data')
  getData(@Query() query: { region_pid: string }) {
    return this.regionService.getRegionData(query.region_pid);
  }

  @Get()
  findAll(@Query() query: { region_pid: string }) {
    return this.regionService.getRegionTree(query.region_pid);
  }
  @Post()
  create(@Body() createRegion: Region) {
    return this.regionService.createRegion(createRegion);
  }

  @Put()
  update(@Body() updateRegion: RegionDot) {
    return this.regionService.updateRegion(updateRegion);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.regionService.deleteRegion(id);
  }
  @Get(':id')
  findOne(@Query('id') id: string) {
    return this.regionService.getRegionById(id);
  }
}
