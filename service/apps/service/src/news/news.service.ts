import { Classify } from '@libs/db/models/classify.model';
import { Manage } from '@libs/db/models/manage.model';
import { News } from '@libs/db/models/news.model';
import { Injectable } from '@nestjs/common';
import { IResponse } from 'libs/interface/response.interface';
import { Model } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class NewsService {
  constructor(
    @InjectModel(News) private readonly newsModel,
    @InjectModel(Classify) private readonly classifyModel: Model<Classify>,
    @InjectModel(Manage) private readonly manageModel: Model<Manage>,
  ) {}
  private response: IResponse;

  async findAll(id: string) {
    const data = await this.classifyModel.findOne({
      classify_id: id,
      is_delete: false,
    });
    const children = await this.newsModel
      .find({ pid: id, is_delete: false })
      .sort('sort');
    return {
      ...data._doc,
      children,
    };
  }
  async findManageData() {
    const info = await this.classifyModel.findOne({
      classify_id: '13',
      is_delete: false,
    });
    const child = await this.classifyModel.find({
      classify_pid: '13',
      is_delete: false,
    });
    const children = await Promise.all(
      child.map(async (item) => {
        const data = await this.manageModel.find({
          classify_id: item.classify_id,
          is_delete: false,
        });
        return {
          ...item._doc,
          children: data,
        };
      }),
    );
    return {
      ...info._doc,
      children,
    };
  }

  async findNewsInfo(id: string) {
    const data = await this.newsModel.findOne({
      news_id: id,
      is_delete: false,
    });
    return data;
  }
}
