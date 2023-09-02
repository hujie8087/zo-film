import { ApiProperty } from '@nestjs/swagger';
import { Prop, modelOptions } from '@typegoose/typegoose';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Text {
  @Prop()
  @ApiProperty({ description: '文本id', example: '文本id' })
  @IsString()
  text_id: string;
  @Prop()
  @ApiProperty({ description: '类别id', example: '类别id' })
  @IsString()
  type_id: string;
  @Prop()
  @ApiProperty({ description: '日期', example: '日期' })
  @IsString()
  date: string;
  @Prop()
  @ApiProperty({ description: '文本名称', example: '文本名称' })
  @IsString()
  name: string;
  @Prop()
  @ApiProperty({ description: '文本图片', example: '文本图片' })
  @IsString()
  upload_img: string;
  @Prop()
  @ApiProperty({ description: '文本关联ID', example: '文本关联ID' })
  @IsString()
  classify_id: string;
  @Prop()
  @ApiProperty({ description: '是否删除', example: false })
  @IsBoolean()
  is_delete: boolean;
  _doc: any;
}
export class TextDot extends Text {
  _id: string;
}
