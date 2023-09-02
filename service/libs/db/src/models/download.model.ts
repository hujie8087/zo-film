import { ApiProperty } from '@nestjs/swagger';
import { Prop, modelOptions } from '@typegoose/typegoose';
import { IsString } from 'class-validator';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Download {
  @Prop()
  @ApiProperty({ description: '下载id', example: '' })
  @IsString()
  download_id: string;
  @Prop()
  @ApiProperty({ description: '类型ID', example: '' })
  @IsString()
  type_id: string;
  @Prop()
  @ApiProperty({ description: '日期', example: '' })
  @IsString()
  date: string;
  @Prop()
  @ApiProperty({ description: '名称', example: '' })
  @IsString()
  download_name: string;
  @Prop()
  @ApiProperty({ description: '文件地址', example: '' })
  @IsString()
  download_file: string;
  @Prop()
  @ApiProperty({ description: '下载次数', example: '' })
  download_number: string;
  @Prop()
  @ApiProperty({ description: '文件内容', example: '' })
  download_content: string;
  @Prop()
  @ApiProperty({ description: '关联id', example: '' })
  classify_id: string;
  @Prop()
  @ApiProperty({ description: 'pv', example: '' })
  pv: string;
  @Prop()
  @ApiProperty({ description: '是否删除', example: '' })
  is_delete: boolean;
}

export class DownloadDot extends Download {
  _id: string;
}
