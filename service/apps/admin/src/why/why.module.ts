import { Module } from '@nestjs/common';
import { WhyController } from './why.controller';
import { WhyService } from './why.service';

@Module({
  controllers: [WhyController],
  providers: [WhyService],
})
export class WhyModule {}
