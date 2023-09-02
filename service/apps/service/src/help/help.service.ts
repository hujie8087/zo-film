import { Classify } from '@libs/db/models/classify.model';
import { Download } from '@libs/db/models/download.model';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class HelpService {
  constructor(
    @InjectModel(Classify) readonly classifyModel: Model<Classify>,
    @InjectModel(Download) readonly downloadModel: Model<Download>,
  ) {}
  async getHelpMenu() {
    return this.classifyModel
      .find({ classify_pid: '12', is_delete: false }, { __v: 0, is_delete: 0 })
      .sort('sort');
  }
  async getHelpList(id: string) {
    const data = await this.classifyModel.findOne(
      { classify_id: id, is_delete: false },
      { __v: 0, is_delete: 0 },
    );
    const children = await this.classifyModel.find(
      { classify_pid: id, is_delete: false },
      { __v: 0, is_delete: 0 },
    );
    const downloads = await this.downloadModel.find(
      { classify_id: id, is_delete: false },
      { __v: 0, is_delete: 0 },
    );

    return {
      ...data._doc,
      children,
      downloads,
    };
  }
}
