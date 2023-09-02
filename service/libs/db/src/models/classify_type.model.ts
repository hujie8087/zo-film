import { ApiProperty } from '@nestjs/swagger';
import { Prop, modelOptions } from '@typegoose/typegoose';
import { IsString } from 'class-validator';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class ClassifyType {
  @Prop()
  @ApiProperty({ description: '类型ID', example: '' })
  @IsString()
  type_id: string;
  @Prop()
  @ApiProperty({ description: '表名', example: '' })
  @IsString()
  table_name: string;
  @Prop()
  @ApiProperty({ description: '类型名称', example: '' })
  @IsString()
  type_name: string;
  @Prop()
  @ApiProperty({ description: '展示ID', example: '' })
  @IsString()
  show_id: string;
  @Prop()
  @ApiProperty({ description: '页面名称', example: '' })
  @IsString()
  page_name: string;
  @Prop()
  @ApiProperty({ description: '日期', example: '' })
  date: string;
  @Prop()
  @ApiProperty({ description: 'glids', example: '' })
  glids: string;
  @Prop()
  @ApiProperty({ description: '标识', example: '' })
  biaoshi: string;
  @Prop()
  @ApiProperty({ description: '是否删除', example: '' })
  is_delete: boolean;
}

export class ClassifyTypeDot extends ClassifyType {
  _id: string;
}
