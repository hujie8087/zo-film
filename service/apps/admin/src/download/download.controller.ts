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
import { DownloadService } from './download.service';
import { Download, DownloadDot } from '@libs/db/models/download.model';

@Controller('download')
@ApiTags('文件上传')
export class DownloadController {
  constructor(private readonly downloadService: DownloadService) {}

  @Post()
  create(@Body() createDownload: Download) {
    return this.downloadService.create(createDownload);
  }

  @Get()
  findAll(@Query() query) {
    return this.downloadService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.downloadService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDownloadDto: DownloadDot) {
    return this.downloadService.update(id, updateDownloadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.downloadService.remove(id);
  }
}
