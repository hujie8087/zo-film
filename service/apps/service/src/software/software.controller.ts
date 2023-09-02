import { Controller, Get } from '@nestjs/common';
import { SoftwareService } from './software.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('software')
@ApiTags('软件中心')
export class SoftwareController {
  constructor(private readonly softwareService: SoftwareService) {}

  @Get()
  getSoftware() {
    return this.softwareService.findSoftware();
  }
}
