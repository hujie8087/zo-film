import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { MessageService } from './message.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('message')
@ApiTags('留言管理')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}
  @Get()
  findAll(@Query() query) {
    return this.messageService.findAll(query);
  }

  @Post()
  create(@Query() query) {
    return this.messageService.create(query);
  }

  @Get(':id')
  findOne(@Query('id') id: string) {
    return this.messageService.findOne(id);
  }

  @Put(':id')
  update(@Query('id') id: string, @Body() updateMessage) {
    return this.messageService.update(id, updateMessage);
  }

  @Delete('removeMany')
  removeMany(@Query() Param) {
    return this.messageService.removeMany(Param.ids);
  }
  @Delete(':id')
  remove(@Query('id') id: string) {
    return this.messageService.remove(id);
  }
}
