import { ApiProperty } from '@nestjs/swagger';
import { Prop, modelOptions } from '@typegoose/typegoose';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Good {
  @Prop()
  @ApiProperty({ description: 'goods_id', example: '' })
  @IsString()
  goods_id: string;
  @Prop()
  @ApiProperty({ description: 'type_id', example: '' })
  @IsString()
  type_id: string;
  @Prop()
  @ApiProperty({ description: '日期', example: '' })
  @IsString()
  date: string;
  @Prop()
  @ApiProperty({ description: '标题', example: '' })
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
  @ApiProperty({ description: '名称', example: '' })
  @IsString()
  goods_name: string;
  @Prop()
  @ApiProperty({ description: '品牌', example: '' })
  @IsString()
  brand: string;
  @Prop()
  @ApiProperty({ description: '产品简介', example: '' })
  @IsString()
  goods_intro: string;
  @Prop()
  @ApiProperty({ description: 'goods_type_id', example: '' })
  @IsString()
  goods_type_id: string;
  @Prop()
  @ApiProperty({ description: '图片', example: '' })
  @IsString()
  index_img: string;
  @Prop()
  @ApiProperty({ description: 'index', example: '' })
  @IsString()
  is_index: string;
  @Prop()
  @ApiProperty({ description: '产品图', example: '' })
  @IsString()
  goods_img: string;
  @Prop()
  @ApiProperty({ description: '产品大图', example: '' })
  @IsString()
  goods_bigimg: string;
  @Prop()
  @ApiProperty({ description: '内容', example: '' })
  @IsString()
  goods_content: string;
  @Prop()
  @ApiProperty({ description: 'goods_classify_id', example: '' })
  @IsString()
  goods_classify_id: string;
  @Prop()
  @ApiProperty({ description: '颜色', example: '' })
  @IsString()
  color: string;
  @Prop()
  @ApiProperty({ description: '尺寸', example: '' })
  @IsString()
  size: string;
  @Prop()
  @ApiProperty({ description: '价格', example: '' })
  @IsString()
  price: string;
  @Prop()
  @ApiProperty({ description: '价格数组', example: '' })
  @IsString()
  price_array: string;
  @Prop()
  @ApiProperty({ description: '天猫链接', example: '' })
  @IsString()
  tianmao: string;
  @Prop()
  @ApiProperty({ description: '京东链接', example: '' })
  @IsString()
  jingdong: string;
  @Prop()
  @ApiProperty({ description: '副标题', example: '' })
  @IsString()
  erji_title: string;
  @Prop()
  @ApiProperty({ description: '视频', example: '' })
  @IsString()
  upload_video: string;
  @Prop()
  @ApiProperty({ description: '排序', example: '' })
  @IsNumber()
  sort: number;
  @Prop()
  @ApiProperty({ description: '是否删除', example: '' })
  @IsBoolean()
  is_delete: boolean;
  @Prop()
  @ApiProperty({ description: '是否显示', example: '' })
  @IsBoolean()
  status: string;
  @Prop()
  @ApiProperty({ description: '父ID', example: '父ID' })
  @IsBoolean()
  pid: string;
  imgCount: number;
  videoCount: number;
  _doc: any;
}
export class GoodDot extends Good {
  _id: string;
}
