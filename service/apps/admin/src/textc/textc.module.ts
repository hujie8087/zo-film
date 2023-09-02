import { Module } from '@nestjs/common';
import { TextCController } from './textc.controller';
import { TextCService } from './textc.service';

@Module({
  controllers: [TextCController],
  providers: [TextCService],
})
export class TextCModule {}
