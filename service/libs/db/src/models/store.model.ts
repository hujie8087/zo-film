import { ApiProperty } from '@nestjs/swagger';
import { Prop, modelOptions } from '@typegoose/typegoose';
import { IsString } from 'class-validator';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Store {
  @Prop()
  @ApiProperty({ description: '地区id', example: '地区id' })
  @IsString()
  store_id: string;
  @Prop()
  @ApiProperty({ description: 'type_id', example: 'type_id' })
  @IsString()
  type_id: string;
  @Prop()
  @ApiProperty({ description: '日期', example: '日期' })
  @IsString()
  date: string;
  @Prop()
  @ApiProperty({ description: '名称', example: '名称' })
  @IsString()
  name: string;
  @Prop()
  @ApiProperty({ description: '门店主图', example: '门店主图' })
  @IsString()
  img: string;
  @Prop()
  @ApiProperty({ description: '地址', example: '地址' })
  @IsString()
  address: string;
  @Prop()
  @ApiProperty({ description: '省份id', example: '省份id' })
  @IsString()
  province: string;
  @Prop()
  @ApiProperty({ description: '城市id', example: '城市id' })
  @IsString()
  city: string;
  @Prop()
  @ApiProperty({ description: '内容', example: '内容' })
  @IsString()
  content: string;
  _doc: any;
}
export class StoreDot extends Store {
  _id: string;
}
