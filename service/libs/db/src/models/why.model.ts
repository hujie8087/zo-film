import { ApiProperty } from '@nestjs/swagger';
import { Prop, modelOptions } from '@typegoose/typegoose';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Why {
  @Prop()
  @ApiProperty({ description: '名称', example: '名称' })
  @IsString()
  name: string;
  @Prop()
  @ApiProperty({ description: '图片', example: '图片地址' })
  @IsString()
  img: string;
  @Prop()
  @ApiProperty({ description: '简介', example: '简介' })
  @IsString()
  intro: string;
  @Prop()
  @ApiProperty({ description: '邮箱', example: '邮箱' })
  @IsString()
  e_mail: string;
  @Prop()
  @ApiProperty({ description: 'phone', example: 'phone' })
  @IsString()
  phone: string;
  @Prop()
  @ApiProperty({ description: '类型ID', example: '类型ID' })
  @IsString()
  type_id: string;
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
  @Prop()
  @ApiProperty({ description: 'whyId', example: '0' })
  @IsString()
  why_id: string;
  @Prop()
  @ApiProperty({ description: '所属栏目', example: '0' })
  @IsString()
  classify_id: string;
  _doc: any;
}
export class WhyDot extends Why {
  _id: string;
}
