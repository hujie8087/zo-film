import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ManageService } from './manage.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('manage')
@ApiTags('管理信息')
export class ManageController {
  constructor(private readonly manageService: ManageService) {}
  @Get()
  findAll(@Query() query) {
    return this.manageService.findAll(query);
  }
  @Post()
  create(@Body() body) {
    return this.manageService.create(body);
  }
  @Get(':id')
  findOne(@Query('id') id: string) {
    return this.manageService.findOne(id);
  }

  @Put(':id')
  update(@Query('id') id: string, @Query() query) {
    return this.manageService.update(id, query);
  }

  @Delete('removeMany')
  removeMany(@Query() Param) {
    return this.manageService.removeMany(Param.ids);
  }
  @Delete(':id')
  remove(@Query('id') id: string) {
    return this.manageService.remove(id);
  }
}
