import { ApiProperty } from '@nestjs/swagger';
import { Prop, modelOptions } from '@typegoose/typegoose';
import { IsString } from 'class-validator';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Link {
  @Prop()
  @ApiProperty({ description: '友情链接ID', example: '' })
  @IsString()
  link_id: string;
  @Prop()
  @ApiProperty({ description: '类型ID', example: '' })
  @IsString()
  type_id: string;
  @Prop()
  @ApiProperty({ description: '日期', example: '' })
  date: string;
  @Prop()
  @ApiProperty({ description: '名称', example: '' })
  @IsString()
  link_name: string;
  @Prop()
  @ApiProperty({ description: '链接', example: '' })
  @IsString()
  link_url: string;
  @Prop()
  @ApiProperty({ description: '图片', example: '' })
  @IsString()
  link_img: string;
  @Prop()
  @ApiProperty({ description: '是否删除', example: '' })
  is_delete: boolean;
}

export class LinkDot extends Link {
  _id: string;
}
