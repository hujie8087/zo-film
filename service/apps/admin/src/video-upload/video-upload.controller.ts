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
import { VideoUploadService } from './video-upload.service';
import {
  VideoUpload,
  VideoUploadDot,
} from '@libs/db/models/video_upload.model';

@Controller('video-upload')
@ApiTags('上传视频')
export class VideoUploadController {
  constructor(private readonly videoUploadService: VideoUploadService) {}

  @Post()
  create(@Body() createVideoUpload: VideoUpload) {
    return this.videoUploadService.create(createVideoUpload);
  }

  @Get()
  findAll(@Query() query) {
    return this.videoUploadService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.videoUploadService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateVideoUploadDto: VideoUploadDot,
  ) {
    return this.videoUploadService.update(id, updateVideoUploadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videoUploadService.remove(id);
  }
}
