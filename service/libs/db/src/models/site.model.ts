import { ApiProperty } from '@nestjs/swagger';
import { Prop, modelOptions } from '@typegoose/typegoose';
import { IsString } from 'class-validator';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Site {
  @Prop()
  @ApiProperty({ description: '站点设置ID', example: '' })
  @IsString()
  site_id: string;
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
  title: string;
  @Prop()
  @ApiProperty({ description: '关键词', example: '' })
  @IsString()
  keywords: string;
  @Prop()
  @ApiProperty({ description: '网站描述', example: '' })
  @IsString()
  description: string;
  @Prop()
  @ApiProperty({ description: '公司名', example: '' })
  @IsString()
  company_name: string;
  @Prop()
  @ApiProperty({ description: '网址', example: '' })
  @IsString()
  url: string;
  @Prop()
  @ApiProperty({ description: 'logo', example: '' })
  @IsString()
  logo_img: string;
  @Prop()
  @ApiProperty({ description: '页眉背景', example: '' })
  @IsString()
  header_bj: string;
  @Prop()
  @ApiProperty({ description: '页头', example: '' })
  @IsString()
  header: string;
  @Prop()
  @ApiProperty({ description: '落款', example: '' })
  @IsString()
  inscribe: string;
  @Prop()
  @ApiProperty({ description: '比例积分', example: '' })
  @IsString()
  proportion_integral: string;
  @Prop()
  @ApiProperty({ description: '电话', example: '' })
  @IsString()
  tel: string;
  @Prop()
  @ApiProperty({ description: 'QQ', example: '' })
  @IsString()
  qq: string;
  @Prop()
  @ApiProperty({ description: '剩余短信数量', example: '' })
  @IsString()
  sms_number: string;
  @Prop()
  @ApiProperty({ description: '版本', example: '' })
  @IsString()
  version_name: string;
  @Prop()
  @ApiProperty({ description: '手机号', example: '' })
  @IsString()
  mobile: string;
}

export class SiteDot extends Site {
  _id: string;
}
