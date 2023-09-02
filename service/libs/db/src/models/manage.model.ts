import { ApiProperty } from '@nestjs/swagger';
import { Prop, modelOptions } from '@typegoose/typegoose';
import { IsString } from 'class-validator';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Manage {
  @Prop()
  @ApiProperty({ description: '管理id', example: '管理id' })
  @IsString()
  manage_id: string;
  @Prop()
  @ApiProperty({ description: '类型ID', example: '类型ID' })
  @IsString()
  type_id: string;
  @Prop()
  @ApiProperty({ description: '日期', example: '日期' })
  @IsString()
  date: string;
  @Prop()
  @ApiProperty({ description: '标题', example: '标题' })
  @IsString()
  title: string;
  @Prop()
  @ApiProperty({ description: '关键词', example: '关键词' })
  @IsString()
  keywords: string;
  @Prop()
  @ApiProperty({ description: '描述', example: '描述' })
  @IsString()
  description: string;
  @Prop()
  @ApiProperty({ description: '版本号', example: '版本号' })
  @IsString()
  version_id: string;
  @Prop()
  @ApiProperty({ description: '姓名', example: '姓名' })
  @IsString()
  name: string;
  @Prop()
  @ApiProperty({ description: '职位', example: '职位' })
  @IsString()
  position: string;
  @Prop()
  @ApiProperty({ description: '详情', example: '详情' })
  @IsString()
  detail: string;
  @Prop()
  @ApiProperty({ description: '父级', example: '父级' })
  @IsString()
  classify_id: string;
  @Prop()
  @ApiProperty({ description: '是否删除', example: '是否删除' })
  @IsString()
  is_delete: boolean;
  @Prop()
  @ApiProperty({ description: '显示状态', example: '显示状态' })
  @IsString()
  status: string;
  _doc: any;
}
export class ManageDot extends Manage {
  _id: string;
}
