import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HelpService } from './help.service';

@Controller('help')
@ApiTags('帮助中心')
export class HelpController {
  constructor(private readonly helpService: HelpService) {}

  // 获取帮助中心菜单
  @Get('menu')
  getHelpMenu() {
    return this.helpService.getHelpMenu();
  }
  @Get('list')
  getHelpList(@Query() query: { id: string }) {
    return this.helpService.getHelpList(query.id);
  }
  @Get('question')
  getQuestion(@Query() query: { id: string }) {
    console.log(query.id);

    return this.helpService.getQuestion(query.id);
  }
}
