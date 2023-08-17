import { UserService } from './user.service';
import { CreateUserDto, User } from '@libs/db/models/user.model';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

// @Crud({
//   model: User,
// })
@Controller('user')
@ApiTags('用户')
export class UserController {
  constructor(
    @InjectModel(User) private readonly model,
    private readonly userService: UserService,
  ) {}
  @Get()
  @ApiOperation({ summary: '显示所有用户' })
  async index(): Promise<User[]> {
    return await this.userService.find();
  }
  //   @UseGuards(JwtAuthGuardUser)
  @Post('create')
  @ApiOperation({ summary: '注册' })
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.create(createUserDto);
  }
}
