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
import { TextCService } from './textc.service';
import { TextC, TextCDot } from '@libs/db/models/text_c.model';

@Controller('text-c')
@ApiTags('文本类型列表')
export class TextCController {
  constructor(private readonly textCService: TextCService) {}

  @Post()
  create(@Body() createTextC: TextC) {
    return this.textCService.create(createTextC);
  }

  @Get()
  findAll(@Query() query) {
    return this.textCService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.textCService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTextCDto: TextCDot) {
    return this.textCService.update(id, updateTextCDto);
  }

  @Delete('removeMany')
  removeMany(@Query() Param) {
    return this.textCService.removeMany(Param.ids);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.textCService.remove(id);
  }
}
