import { ApiProperty } from '@nestjs/swagger';
import { Prop, modelOptions } from '@typegoose/typegoose';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class GoodsVideo {
  @Prop()
  @ApiProperty({ description: '视频id', example: '视频id' })
  @IsString()
  goods_video_id: string;
  @Prop()
  @ApiProperty({ description: '类别id', example: '类别id' })
  @IsString()
  type_id: string;
  @Prop()
  @ApiProperty({ description: '视频名称', example: '视频名称' })
  @IsString()
  name: string;
  @Prop()
  @ApiProperty({ description: '视频图片', example: '视频图片' })
  @IsString()
  img: string;
  @Prop()
  @ApiProperty({ description: '视频地址', example: '视频地址' })
  @IsString()
  upload_video: string;
  @Prop()
  @ApiProperty({ description: '视频副标题', example: '视频副标题' })
  @IsString()
  subtitle: string;
  @Prop()
  @ApiProperty({ description: '视频产品id', example: '视频产品id' })
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
export class GoodsVideoDot extends GoodsVideo {
  _id: string;
}
