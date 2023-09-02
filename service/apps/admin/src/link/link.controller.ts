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
import { LinkService } from './link.service';
import { Link, LinkDot } from '@libs/db/models/link.model';

@Controller('link')
@ApiTags('友情链接')
export class LinkController {
  constructor(private readonly linkService: LinkService) {}

  @Post()
  create(@Body() createLink: Link) {
    return this.linkService.create(createLink);
  }

  @Get()
  findAll(@Query() query) {
    return this.linkService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.linkService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateLinkDto: LinkDot) {
    return this.linkService.update(id, updateLinkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.linkService.remove(id);
  }
}
