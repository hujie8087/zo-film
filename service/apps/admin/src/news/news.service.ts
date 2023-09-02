import { News, NewsDto } from '@libs/db/models/news.model';
import { Injectable, Logger } from '@nestjs/common';
import { IResponse } from 'libs/interface/response.interface';
import { Model } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
@Injectable()
export class NewsService {
  constructor(
    @InjectModel(News)
    private newsModel: Model<NewsDto>,
  ) {}
  private response: IResponse;

  async create(news: News) {
    await this.newsModel
      .find()
      .collation({
        locale: 'zh',
        numericOrdering: true,
      })
      .sort({ news_id: -1 })
      .limit(1)
      .then(async (res) => {
        const news_id = +res[0].news_id + 1 + '';
        const createNews = new this.newsModel({
          ...news,
          date: (new Date().getTime() / 1000).toFixed(0),
          is_delete: false,
          type_id: '14',
          news_id,
          title: '',
          keywords: '',
          description: '',
          version_id: '1',
        });
        await createNews.save();
        Logger.log(`新闻${news.news_title}添加成功`);
        this.response = { code: 200, data: '', msg: '添加新闻类型成功' };
        return this.response;
      });
  }

  async findAll(query) {
    const { pageNum, pageSize, ...params } = query;
    if (params.news_title) {
      params.news_title = { $regex: params.news_title, $options: 'i' };
    }
    const total = await this.newsModel.countDocuments({
      ...params,
      is_delete: false,
    });
    const data = await this.newsModel
      .find({ ...params, is_delete: false }, { __v: 0, is_delete: 0 })
      .sort({ date: -1 })
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

  async findOne(id: string) {
    return await this.newsModel
      .findOne({ _id: id, is_delete: false })
      .then(async () => {
        const data = await this.newsModel.findOne(
          { _id: id, is_delete: false },
          { __v: 0, createdAt: 0, updatedAt: 0, is_delete: 0 },
        );
        this.response = {
          code: 200,
          msg: '新闻类型详情',
          data,
        };
        return this.response;
      })
      .catch(() => {
        return (this.response = {
          code: 500,
          msg: '新闻类型不存在',
          data: '',
        });
      });
  }

  async update(_id: string, updateNews: NewsDto) {
    return await this.newsModel
      .findById(_id)
      .then(async () => {
        await this.newsModel.findByIdAndUpdate(_id, updateNews, {});

        Logger.log(`新闻类型${updateNews.news_title}修改成功`);
        this.response = {
          code: 200,
          msg: '修改新闻类型成功',
          data: '',
        };
        return this.response;
      })
      .catch(() => {
        return (this.response = {
          code: 500,
          msg: '新闻类型不存在',
          data: '',
        });
      });
  }

  async remove(_id: string) {
    return await this.newsModel
      .findOne({ _id })
      .then(async () => {
        await this.newsModel.findOneAndUpdate({ _id }, { is_delete: true }, {});
        this.response = {
          code: 200,
          msg: '新闻删除成功',
          data: '',
        };
        return this.response;
      })
      .catch((err) => {
        Logger.error(err);
        return (this.response = {
          code: 500,
          msg: '新闻不存在',
          data: '',
        });
      });
  }
  async changeStatus(body: { status: number; _id: string }) {
    return await this.newsModel
      .findByIdAndUpdate(body._id, { status: body.status }, {})
      .then(async () => {
        this.response = {
          code: 200,
          msg: '新闻状态修改成功',
          data: '',
        };
        return this.response;
      })
      .catch((err) => {
        Logger.error(err);
        return (this.response = {
          code: 500,
          msg: '新闻不存在',
          data: '',
        });
      });
  }
}
