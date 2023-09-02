import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ClassifyTypeService } from './classify-type.service';
import {
  ClassifyType,
  ClassifyTypeDot,
} from '@libs/db/models/classify_type.model';

@Controller('classify-type')
@ApiTags('类型')
export class ClassifyTypeController {
  constructor(private readonly classifyTypeService: ClassifyTypeService) {}

  @Post()
  create(@Body() createClassifyType: ClassifyType) {
    return this.classifyTypeService.create(createClassifyType);
  }

  @Get()
  findAll(@Query() query) {
    return this.classifyTypeService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classifyTypeService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateClassifyTypeDto: ClassifyTypeDot,
  ) {
    return this.classifyTypeService.update(id, updateClassifyTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.classifyTypeService.remove(id);
  }
}
