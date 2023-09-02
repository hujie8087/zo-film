import { Module } from '@nestjs/common';
import { VideoDownController } from './video-down.controller';
import { VideoDownService } from './video-down.service';

@Module({
  controllers: [VideoDownController],
  providers: [VideoDownService],
})
export class VideoDownModule {}
