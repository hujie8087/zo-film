import { ApiProperty } from '@nestjs/swagger';
import { Prop, modelOptions } from '@typegoose/typegoose';
import { IsString } from 'class-validator';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class NewsType {
  @Prop()
  @ApiProperty({ description: '新闻分类标题', example: '' })
  @IsString()
  title: string;
  @Prop()
  @ApiProperty({ description: '新闻分类关键词', example: '' })
  @IsString()
  keywords: string;
  @Prop()
  @ApiProperty({ description: '新闻分类父级', example: '' })
  @IsString()
  pid: string;
  @Prop()
  @ApiProperty({ description: '新闻分类描述', example: '' })
  @IsString()
  description: string;
  @Prop()
  @ApiProperty({ description: '新闻分类日期', example: '' })
  @IsString()
  date: string;
  @Prop()
  @ApiProperty({ description: '新闻分类排序', example: 0 })
  @IsString()
  sort: number;
  @Prop()
  @ApiProperty({ description: '新闻分类链接', example: '' })
  @IsString()
  url: string;
  @Prop()
  @ApiProperty({ description: '新闻分类标记', example: '' })
  @IsString()
  note: string;
  @Prop()
  @ApiProperty({ description: '新闻分类英文标题', example: '' })
  @IsString()
  en_title: string;
  @Prop()
  @ApiProperty({ description: '新闻分类内容', example: '' })
  @IsString()
  content: string;
  @Prop()
  @ApiProperty({ description: '新闻分类说明', example: '' })
  @IsString()
  intro: string;
  @Prop()
  @ApiProperty({ description: '新闻分类图片', example: '' })
  @IsString()
  image_url: string;
  @Prop()
  @ApiProperty({ description: '新闻分类内页图片', example: '' })
  @IsString()
  page_img: string;
  @Prop()
  @ApiProperty({
    description: '新闻分类是否删除',
    example: false,
    default: false,
  })
  @IsString()
  is_delete: boolean;
  @Prop()
  @ApiProperty({ description: '新闻分类副标题', example: '' })
  @IsString()
  sub_title: string;
  @Prop()
  @ApiProperty({ description: '新闻分类备注', example: '' })
  @IsString()
  remark: string;
  @Prop()
  @ApiProperty({ description: '新闻分类多图', example: '' })
  @IsString()
  upload_img: string;
  @Prop()
  @ApiProperty({ description: '新闻分类状态', example: 1 })
  @IsString()
  status: number;
  @Prop()
  @ApiProperty({ description: '新闻分类父级标题', example: '' })
  pid_name: string;
  @Prop({ ref: () => 'NewsType' })
  @ApiProperty({ description: '新闻分类子类', example: [] })
  children?: NewsTypeDto[];
  hasChildren?: boolean;
}
export class NewsTypeDto extends NewsType {
  _id?: string;
}
