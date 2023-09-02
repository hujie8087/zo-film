import { Controller, Get } from '@nestjs/common';
import { WhyService } from './why.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('why')
@ApiTags('为什么选择我们')
export class WhyController {
  constructor(private readonly whyService: WhyService) {}

  @Get()
  getWhyInfo() {
    return this.whyService.findInfo();
  }
}
