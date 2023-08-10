import { News } from '@libs/db/models/news.model';
import { Injectable } from '@nestjs/common';
import { IResponse } from 'libs/interface/response.interface';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class NewsService {
  constructor(@InjectModel(News) private readonly newsModel) {}
  private response: IResponse;

  async findAll(query) {
    const { pageNum, pageSize, ...params } = query;
    if (params.title) {
      params.title = { $regex: params.title, $options: 'i' };
    }
    if (params.summary) {
      params.summary = { $regex: params.summary, $options: 'i' };
    }
    const total = await this.newsModel.countDocuments({
      ...params,
      isDel: false,
    });
    const data = await this.newsModel
      .find({ ...params, isDel: false })
      .sort('sort')
      .skip(pageNum ? (pageNum - 1) * pageSize : 0)
      .limit(pageSize);
    this.response = {
      code: 200,
      msg: '新闻列表',
      data: {
        list: data,
        total,
        pageNum: +pageNum,
        pageSize: +pageSize,
      },
    };
    return this.response;
  }
}
