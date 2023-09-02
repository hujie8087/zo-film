import { ApiProperty } from '@nestjs/swagger';
import { Prop, modelOptions } from '@typegoose/typegoose';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Classify {
  @Prop()
  @ApiProperty({ description: 'classify_id', example: '' })
  @IsString()
  classify_id: string;
  @Prop()
  @ApiProperty({ description: 'classify_pid', example: '' })
  @IsString()
  classify_pid: string;
  @Prop()
  @ApiProperty({ description: 'type_id', example: '' })
  @IsString()
  type_id: string;
  @Prop()
  @ApiProperty({ description: 'level_id', example: '' })
  @IsString()
  level_id: string;
  @Prop()
  @ApiProperty({ description: '日期', example: '' })
  @IsString()
  date: string;
  @Prop()
  @ApiProperty({ description: '名称', example: '' })
  @IsString()
  title: string;
  @Prop()
  @ApiProperty({ description: '关键词', example: '' })
  @IsString()
  keywords: string;
  @Prop()
  @ApiProperty({ description: '描述', example: '' })
  @IsString()
  description: string;
  @Prop()
  @ApiProperty({ description: '笔记', example: '' })
  @IsString()
  note: string;
  @Prop()
  @ApiProperty({ description: '名称', example: '' })
  @IsString()
  classify_name: string;
  @Prop()
  @ApiProperty({ description: '自定义链接', example: '' })
  @IsString()
  classify_url: string;
  @Prop()
  @ApiProperty({ description: '笔记', example: '' })
  @IsString()
  classify_note: string;
  @Prop()
  @ApiProperty({ description: '英文名称', example: '' })
  @IsString()
  en_name: string;
  @Prop()
  @ApiProperty({ description: '简介', example: '' })
  @IsString()
  classify_intro: string;
  @Prop()
  @ApiProperty({ description: '图片', example: '' })
  @IsString()
  classify_img: string;
  @Prop()
  @ApiProperty({ description: '内页图片', example: '' })
  @IsString()
  page_img: string;
  @Prop()
  @ApiProperty({ description: '是否删除', example: '' })
  @IsString()
  is_delete: boolean;
  @Prop()
  @ApiProperty({ description: '副标题', example: '' })
  @IsString()
  sub_name: string;
  @Prop()
  @ApiProperty({ description: '备注', example: '' })
  @IsString()
  beizhu: string;
  @Prop()
  @ApiProperty({ description: '简介2', example: '' })
  @IsString()
  classify_intro2: string;
  @Prop()
  @ApiProperty({ description: '图片上传', example: '' })
  @IsString()
  upload_img: string;
  @Prop()
  @ApiProperty({ description: '排序', example: '' })
  @IsNumber()
  sort: number;
  @Prop()
  @ApiProperty({ description: '是否导航显示', example: '' })
  @IsBoolean()
  is_hide: boolean;
  _doc: any;
}

export class ClassifyDot extends Classify {
  _id: string;
}
