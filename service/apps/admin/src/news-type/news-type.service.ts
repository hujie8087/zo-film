import { NewsType, NewsTypeDto } from '@libs/db/models/newsType.model';
import { Injectable, Logger } from '@nestjs/common';
import { IResponse } from 'libs/interface/response.interface';
import { Model } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
@Injectable()
export class NewsTypeService {
  constructor(
    @InjectModel(NewsType)
    private newsTypeModel: Model<NewsTypeDto>,
  ) {}
  private response: IResponse;

  async create(newsType: NewsType) {
    const createNewsType = new this.newsTypeModel({
      ...newsType,
      is_delete: false,
    });
    await createNewsType.save();
    Logger.log(`新闻类型${newsType.title}添加成功`);
    this.response = { code: 200, data: '', msg: '添加新闻类型成功' };
    return this.response;
  }

  async findAll() {
    const data = await this.newsTypeModel
      .find({ is_delete: false }, { __v: 0, is_delete: 0 })
      .sort('sort');
    // 生成用pid分组的树形结构
    const treeData = this.buildTree(data);
    this.response = {
      code: 200,
      msg: '新闻类型列表',
      data: {
        list: treeData,
      },
    };

    this.response = {
      code: 200,
      msg: '新闻类型列表',
      data: {
        list: treeData,
      },
    };
    return this.response;
  }

  async findOne(id: string) {
    return await this.newsTypeModel
      .findOne({ _id: id, is_delete: false })
      .then(async () => {
        const data = await this.newsTypeModel.findOne(
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

  async update(_id: string, updateNewsType: NewsTypeDto) {
    return await this.newsTypeModel
      .findById(_id)
      .then(async () => {
        await this.newsTypeModel.findByIdAndUpdate(_id, updateNewsType, {});

        Logger.log(`新闻类型${updateNewsType.title}修改成功`);
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
    return await this.newsTypeModel
      .findOne({ _id: _id })
      .then(async () => {
        await this.newsTypeModel.findOneAndUpdate({ _id }, { isDel: true }, {});
        this.response = {
          code: 200,
          msg: '新闻类型删除成功',
          data: '',
        };
        return this.response;
      })
      .catch((err) => {
        Logger.error(err);
        return (this.response = {
          code: 500,
          msg: '新闻类型不存在',
          data: '',
        });
      });
  }
  async changeStatus(body: { status: number; _id: string }) {
    return await this.newsTypeModel
      .findByIdAndUpdate(body._id, { status: body.status }, {})
      .then(async () => {
        this.response = {
          code: 200,
          msg: '新闻类型状态修改成功',
          data: '',
        };
        return this.response;
      })
      .catch((err) => {
        Logger.error(err);
        return (this.response = {
          code: 500,
          msg: '新闻类型不存在',
          data: '',
        });
      });
  }
  buildTree(data: NewsTypeDto[], pid = '0'): NewsTypeDto[] {
    const result = [];
    data.forEach((item) => {
      if (item.pid === pid) {
        const children = this.buildTree(data, item._id.toString());
        if (children.length) {
          item.children = children;
          item.hasChildren = true;
        }
        result.push(item);
      }
    });
    return result;
  }
}
