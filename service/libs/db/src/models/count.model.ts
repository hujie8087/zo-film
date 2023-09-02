import { ApiProperty } from '@nestjs/swagger';
import { Prop, modelOptions } from '@typegoose/typegoose';
import { IsString } from 'class-validator';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Count {
  @Prop()
  @ApiProperty({ description: '名称', example: '' })
  @IsString()
  count_name: string;
  @Prop()
  @ApiProperty({ description: '数量', example: '' })
  @IsString()
  count_num: string;
}
