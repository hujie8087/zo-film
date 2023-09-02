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
import { SiteService } from './site.service';

@Controller('site')
@ApiTags('站点设置列表')
export class SiteController {
  constructor(private readonly siteCService: SiteService) {}

  @Post()
  create(@Body() createSite) {
    return this.siteCService.create(createSite);
  }

  @Get()
  findAll(@Query() query) {
    return this.siteCService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.siteCService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSiteDto) {
    return this.siteCService.update(id, updateSiteDto);
  }

  @Delete('removeMany')
  removeMany(@Query() Param) {
    return this.siteCService.removeMany(Param.ids);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.siteCService.remove(id);
  }
}
