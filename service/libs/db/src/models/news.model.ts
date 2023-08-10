import { ApiProperty } from '@nestjs/swagger';
import { Prop, modelOptions } from '@typegoose/typegoose';
import { IsString } from 'class-validator';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class News {
  @Prop()
  @ApiProperty({ description: '新闻标题', example: '新闻标题1' })
  @IsString()
  title: string;
  @Prop()
  @ApiProperty({ description: '新闻内容', example: '新闻内容1' })
  @IsString()
  content: string;
  @Prop()
  @ApiProperty({ description: '发布时间', example: '发布时间' })
  @IsString()
  time: string;
}
