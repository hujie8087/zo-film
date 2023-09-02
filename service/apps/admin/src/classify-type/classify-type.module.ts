import { Module } from '@nestjs/common';
import { ClassifyTypeController } from './classify-type.controller';
import { ClassifyTypeService } from './classify-type.service';

@Module({
  controllers: [ClassifyTypeController],
  providers: [ClassifyTypeService],
})
export class ClassifyTypeModule {}
