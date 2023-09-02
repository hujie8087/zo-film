import { ApiProperty } from '@nestjs/swagger';
import { Prop, modelOptions } from '@typegoose/typegoose';
import { IsString } from 'class-validator';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Region {
  @Prop()
  @ApiProperty({ description: '地区id', example: '地区id' })
  @IsString()
  region_id: string;
  @Prop()
  @ApiProperty({ description: '父级id', example: '父级id' })
  @IsString()
  region_pid: string;
  @Prop()
  @ApiProperty({ description: '地区名称', example: '地区名称' })
  @IsString()
  region_name: string;
  @Prop()
  @ApiProperty({ description: '地区类型', example: '地区类型' })
  @IsString()
  region_type: string;
  @Prop()
  @ApiProperty({ description: 'agency_id', example: 'agency_id' })
  @IsString()
  agency_id: string;
  _doc: any;
}
export class RegionDot extends Region {
  _id: string;
}
