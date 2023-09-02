import { ApiProperty } from '@nestjs/swagger';
import { Prop, modelOptions } from '@typegoose/typegoose';
import { IsString } from 'class-validator';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Banner {
  @Prop()
  @ApiProperty({ description: '广告图id', example: '' })
  @IsString()
  banner_id: string;
  @Prop()
  @ApiProperty({ description: '类型ID', example: '' })
  @IsString()
  type_id: string;
  @Prop()
  @ApiProperty({ description: '日期', example: '' })
  @IsString()
  date: string;
  @Prop()
  @ApiProperty({ description: '标题', example: '' })
  @IsString()
  banner_title: string;
  @Prop()
  @ApiProperty({ description: 'PC图片', example: '' })
  @IsString()
  banner_img: string;
  @Prop()
  @ApiProperty({ description: '链接', example: '' })
  @IsString()
  banner_url: string;
  @Prop()
  @ApiProperty({ description: '移动端图片', example: '' })
  mobile_img: string;
  @Prop()
  @ApiProperty({ description: '排序', example: '' })
  sort: number;
  @Prop()
  @ApiProperty({ description: '状态', example: '' })
  status: string;
  @Prop()
  @ApiProperty({ description: '是否删除', example: '' })
  is_delete: boolean;
}

export class BannerDot extends Banner {
  _id: string;
}
