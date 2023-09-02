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
import { VideoDownService } from './video-down.service';
import { VideoDown, VideoDownDot } from '@libs/db/models/video_down.model';

@Controller('video-down')
@ApiTags('上传视频')
export class VideoDownController {
  constructor(private readonly videoDownService: VideoDownService) {}

  @Post()
  create(@Body() createVideoDown: VideoDown) {
    return this.videoDownService.create(createVideoDown);
  }

  @Get()
  findAll(@Query() query) {
    return this.videoDownService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.videoDownService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateVideoDownDto: VideoDownDot) {
    return this.videoDownService.update(id, updateVideoDownDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videoDownService.remove(id);
  }
}
