import { ApiProperty } from '@nestjs/swagger';
import { Prop, modelOptions } from '@typegoose/typegoose';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class VideoUpload {
  @Prop()
  @ApiProperty({ description: '视频名称', example: '视频名称' })
  @IsString()
  name: string;
  @Prop()
  @ApiProperty({ description: '视频简介', example: '视频简介' })
  @IsString()
  intro: string;
  i;
  @Prop()
  @ApiProperty({ description: '视频图片', example: '视频图片' })
  @IsString()
  img: string;
  @Prop()
  @ApiProperty({ description: '视频地址', example: '视频地址' })
  @IsString()
  upload_video: string;
  @Prop()
  @ApiProperty({ description: '视频关联id', example: '视频关联id' })
  @IsString()
  video_upload_id: string;
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
export class VideoUploadDot extends VideoUpload {
  _id: string;
}
