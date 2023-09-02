import { Module } from '@nestjs/common';
import { HomeDataService } from './home-data.service';
import { HomeDataController } from './home-data.controller';

@Module({
  controllers: [HomeDataController],
  providers: [HomeDataService],
})
export class HomeDataModule {}
