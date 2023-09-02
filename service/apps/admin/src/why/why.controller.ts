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
import { ApiTags } from '@nestjs/swagger';
import { WhyService } from './why.service';

@Controller('why')
@ApiTags('为什么选择Z&O')
export class WhyController {
  constructor(private readonly whyService: WhyService) {}

  @Get()
  findAll(@Query() query) {
    return this.whyService.findAll(query);
  }

  @Get(':id')
  findOne(@Query('id') id: string) {
    return this.whyService.findOne(id);
  }

  @Post()
  create(@Body() createWhy) {
    return this.whyService.create(createWhy);
  }

  @Put(':id')
  update(@Query('id') id: string, @Body() updateWhy) {
    return this.whyService.update(id, updateWhy);
  }

  @Delete('removeMany')
  removeMany(@Query() Param) {
    return this.whyService.removeMany(Param.ids);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.whyService.remove(id);
  }
}
