import { ApiProperty } from '@nestjs/swagger';
import { Prop, modelOptions } from '@typegoose/typegoose';
import { IsBoolean, IsString } from 'class-validator';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Message {
  @Prop()
  @ApiProperty({ description: '留言id', example: '留言id' })
  @IsString()
  message_id: string;
  @Prop()
  @ApiProperty({ description: '分类id', example: '分类id' })
  @IsString()
  type_id: string;
  @Prop()
  @ApiProperty({ description: '主题', example: '主题' })
  @IsString()
  theme: string;
  @Prop()
  @ApiProperty({ description: '日期', example: '日期' })
  @IsString()
  date: string;
  @Prop()
  @ApiProperty({ description: '标题', example: '标题' })
  @IsString()
  title: string;
  @Prop()
  @ApiProperty({ description: '描述', example: '描述' })
  @IsString()
  description: string;
  @Prop()
  @ApiProperty({ description: '联系电话', example: '联系电话' })
  @IsString()
  tel: string;
  @Prop()
  @ApiProperty({ description: 'QQ', example: 'QQ' })
  @IsString()
  qq: string;
  @Prop()
  @ApiProperty({ description: '邮箱', example: '' })
  @IsString()
  e_mail: string;
  @Prop()
  @ApiProperty({ description: '内容', example: '' })
  @IsString()
  content: string;
  @Prop()
  @ApiProperty({ description: '是否删除', example: false })
  @IsBoolean()
  is_delete: boolean;

  _doc: any;
}
export class MessageDot extends Message {
  _id: string;
}
