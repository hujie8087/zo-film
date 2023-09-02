import { Classify } from '@libs/db/models/classify.model';
import { Region } from '@libs/db/models/region.model';
import { Store } from '@libs/db/models/store.model';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class StoreService {
  constructor(
    @InjectModel(Store) private readonly storeService: Model<Store>,
    @InjectModel(Region) private readonly regionService: Model<Region>,
    @InjectModel(Classify) private readonly classifyService: Model<Classify>,
  ) {}
  async findStoreInfo() {
    return await this.classifyService.findOne({
      classify_id: '20',
      is_delete: false,
    });
  }
  async findRegionList(pid: string) {
    return await this.regionService.find({ region_pid: pid });
  }
  async findStoreList(city: string, province: string) {
    return await this.storeService.find({ city, province });
  }
}
