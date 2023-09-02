import { Classify } from '@libs/db/models/classify.model';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class NewsTypeService {
  constructor(@InjectModel(Classify) private classifyModel: Model<Classify>) {}
  async findNewsMenu(): Promise<any> {
    return await this.classifyModel
      .find({
        classify_pid: '10',
        is_delete: false,
      })
      .sort('classify_id');
  }
}
