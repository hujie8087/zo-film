import { ApiProperty } from '@nestjs/swagger';
import { Prop, modelOptions } from '@typegoose/typegoose';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class GoodsImg {
  @Prop()
  @ApiProperty({ description: '图片id', example: '图片id' })
  @IsString()
  goods_imgs_id: string;
  @Prop()
  @ApiProperty({ description: '类别id', example: '类别id' })
  @IsString()
  type_id: string;
  @Prop()
  @ApiProperty({ description: '图片名称', example: '图片名称' })
  @IsString()
  name: string;
  @Prop()
  @ApiProperty({ description: '图片地址', example: '图片地址' })
  @IsString()
  imgs: string;
  @Prop()
  @ApiProperty({ description: '图片简介', example: '图片简介' })
  @IsString()
  intro: string;
  @Prop()
  @ApiProperty({ description: '图片产品id', example: '图片产品id' })
  @IsString()
  goods_id: string;
  @Prop()
  @ApiProperty({ description: '日期', example: '日期' })
  @IsString()
  date: string;
  @Prop()
  @ApiProperty({ description: '图片状态', example: '图片状态' })
  @IsString()
  status: string;
  @Prop()
  @ApiProperty({ description: '排序', example: '1' })
  @IsNumber()
  sort: number;
  @Prop()
  @ApiProperty({ description: '是否删除', example: false })
  @IsBoolean()
  is_delete: boolean;
  _doc: any;
}
export class GoodsImgDot extends GoodsImg {
  _id: string;
}
