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
import { TextService } from './text.service';
import { Text, TextDot } from '@libs/db/models/text.model';

@Controller('text')
@ApiTags('图文列表')
export class TextController {
  constructor(private readonly textCService: TextService) {}

  @Post()
  create(@Body() createText: Text) {
    return this.textCService.create(createText);
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
  update(@Param('id') id: string, @Body() updateTextDto: TextDot) {
    return this.textCService.update(id, updateTextDto);
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
