import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StoreService } from './store.service';
import { Store } from '@libs/db/models/store.model';

@Controller('store')
@ApiTags('门店')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get()
  findAll(@Query() query) {
    return this.storeService.findAll(query);
  }

  @Get('filter')
  findFilterStore(@Query('pid') pid: string) {
    return this.storeService.findFilterRegin(pid);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storeService.findOne(id);
  }
  @Post()
  create(@Body() createStore: Store) {
    return this.storeService.create(createStore);
  }

  @Put(':id')
  update(@Query('id') id: string, @Query() updateStore) {
    return this.storeService.update(id, updateStore);
  }

  @Delete('removeMany')
  removeMany(@Query() Param) {
    return this.storeService.removeMany(Param.ids);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storeService.remove(id);
  }
}
