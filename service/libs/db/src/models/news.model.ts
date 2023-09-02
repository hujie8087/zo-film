import { IQuery } from './../../../interface/query.interface';
import { ApiProperty } from '@nestjs/swagger';
import { Prop, modelOptions } from '@typegoose/typegoose';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

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
  @ApiProperty({ description: '新闻关键字', example: '关键字' })
  @IsString()
  keywords: string;
  @Prop()
  @ApiProperty({ description: '新闻描述', example: '描述' })
  @IsString()
  description: string;
  @Prop()
  @ApiProperty({ description: '新闻内容', example: '新闻内容1' })
  @IsString()
  content: string;
  @Prop()
  @ApiProperty({ description: '发布时间', example: '发布时间' })
  @IsString()
  time: string;
  @Prop()
  @ApiProperty({ description: '新闻id', example: '新闻id' })
  @IsString()
  news_id: string;
  @Prop()
  @ApiProperty({ description: '新闻类别ID', example: '新闻类别id' })
  @IsString()
  type_id: string;
  @Prop()
  @ApiProperty({ description: '新闻日期', example: '新闻日期' })
  @IsString()
  date: string;
  @Prop()
  @ApiProperty({ description: '新闻标题', example: '新闻标题' })
  @IsString()
  news_title: string;
  @Prop()
  @ApiProperty({ description: '新闻简介', example: '新闻简介' })
  @IsString()
  news_intro: string;
  @Prop()
  @ApiProperty({ description: '新闻作者', example: '新闻作者' })
  @IsString()
  news_author: string;
  @Prop()
  @ApiProperty({ description: '新闻来源', example: '新闻来源' })
  @IsString()
  news_source: string;
  @Prop()
  @ApiProperty({ description: '新闻内容', example: '新闻内容' })
  @IsString()
  news_content: string;
  @Prop()
  @ApiProperty({ description: '新闻图片', example: '新闻图片' })
  @IsString()
  news_img: string;
  @Prop()
  @ApiProperty({ description: '新闻状态', example: '新闻状态' })
  @IsString()
  status: string;
  @Prop()
  @ApiProperty({ description: '是否删除', example: '是否删除' })
  @IsBoolean()
  is_delete: boolean;
  @Prop()
  @ApiProperty({ description: '父级', example: '父级' })
  @IsNumber()
  pid: string;
}

export class NewsDto extends News {
  _id?: string;
}

export interface NewsQueryDto extends IQuery {
  news_title?: string;
  type_id?: string;
}
