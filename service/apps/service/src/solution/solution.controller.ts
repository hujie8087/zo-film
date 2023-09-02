import { Controller, Get } from '@nestjs/common';
import { SolutionService } from './solution.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('solution')
@ApiTags('解决方案')
export class SolutionController {
  constructor(private readonly solutionService: SolutionService) {}
  @Get()
  getSolution() {
    return this.solutionService.findSolution();
  }
  @Get('train')
  getTrain() {
    return this.solutionService.findTrain();
  }
  @Get('installer')
  getInstaller() {
    return this.solutionService.findInstaller();
  }
}
