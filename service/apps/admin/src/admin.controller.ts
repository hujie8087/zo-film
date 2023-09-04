import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  Session,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { ApiOperation, ApiProperty } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import * as multer from 'multer';
import * as dayjs from 'dayjs';
import { existsSync, mkdirSync } from 'fs';
import * as svgCaptcha from 'svg-captcha';
import { Public } from 'libs/public';

@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  @Post('upload')
  @ApiProperty({ description: '单文件上传' })
  @ApiOperation({ summary: '单文件上传' })
  @UseInterceptors(
    FileInterceptor('file', {
      dest: '/uploads/newImages',
      storage: multer.diskStorage({
        // 上传文件保存目录，无则自动创建
        destination: function (req, file, cb) {
          const dir = '/Uploads/newImages/' + dayjs().format('YYYY/MM/DD');
          if (!existsSync(dir)) {
            mkdirSync(dir, {
              recursive: true,
            });
          }
          cb(null, dir);
        },
        // 解决文件名中文乱码问题
        filename: function (req, file, cb) {
          file.originalname = Buffer.from(file.originalname, 'latin1').toString(
            'utf8',
          );
          const filename = file.originalname.split('.')[0];
          const fileFormat = file.originalname.split('.');
          cb(null, `${filename}.${fileFormat[fileFormat.length - 1]}`);
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return {
      data: {
        fileUrl: file.path,
        code: 200,
        msg: '文件上传成功',
      },
    };
  }
  @Public()
  @Post('verify')
  verifyCaptcha(@Body() body, @Session() session) {
    const captcha = body.captcha.toLowerCase();
    const storedCaptcha = String(session.captcha).toLowerCase();
    if (captcha && captcha === storedCaptcha) {
      // 验证码校验成功
      return { code: 200, data: '', msg: '验证码校验成功' };
    } else {
      // 验证码校验失败
      return { code: 202, data: '', msg: '验证码校验失败' };
    }
  }
  @Public()
  @Get('captcha')
  generateCaptcha(@Res() res, @Session() session) {
    const captcha = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      width: 100,
      height: 34,
    });
    // 将验证码文本存储在会话或数据库中，以便后续验证
    session.captcha = captcha.text;
    console.log(session.captcha);

    res.type('svg');
    res.send(captcha.data);
  }
}
