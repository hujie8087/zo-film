import { ApiProperty } from '@nestjs/swagger';
import { Prop, modelOptions } from '@typegoose/typegoose';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class VideoDown {
  @Prop()
  @ApiProperty({ description: '类型ID', example: '类型ID' })
  @IsString()
  classify_id: string;
  @Prop()
  @ApiProperty({ description: '视频名称', example: '视频名称' })
  @IsString()
  name: string;
  @Prop()
  @ApiProperty({ description: '类型ID', example: '类型ID' })
  @IsString()
  type_id: string;
  @Prop()
  @ApiProperty({ description: '视频地址', example: '视频地址' })
  @IsString()
  down_video: string;
  @Prop()
  @ApiProperty({ description: '视频关联id', example: '视频关联id' })
  @IsString()
  video_down_id: string;
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
}
export class VideoDownDot extends VideoDown {
  _id: string;
}
