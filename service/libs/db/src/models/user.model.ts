import { ApiProperty } from '@nestjs/swagger';
import { Prop, modelOptions } from '@typegoose/typegoose';
import { IsNotEmpty, IsString } from 'class-validator';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class User {
  @Prop()
  @ApiProperty({ description: '用户名', example: '用户名' })
  @IsString()
  username: string;
  @Prop()
  @ApiProperty({ description: '用户密码', example: '123456' })
  @IsString()
  password: string;
  @Prop()
  @ApiProperty({ description: '用户姓名', example: '用户姓名' })
  @IsString()
  name: string;
  @Prop()
  @ApiProperty({ description: '用户性别', example: '用户性别', default: '男' })
  @IsString()
  permissions: string;
  @Prop()
  @ApiProperty({ description: '用户秘钥', example: '', default: 0 })
  secret: number;
}

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class CreateUserDto {
  @Prop()
  @ApiProperty({ description: '用户名', example: '用户名' })
  @IsString()
  username: string;
  @Prop()
  @ApiProperty({ description: '用户密码', example: '123456' })
  @IsString()
  password: string;
  @Prop()
  @ApiProperty({ description: '用户姓名', example: '用户姓名' })
  @IsString()
  name: string;
}

export class LoginUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;
}
