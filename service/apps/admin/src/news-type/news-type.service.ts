import { NewsType, NewsTypeTree } from '@libs/db/models/newsType.model';
import { Injectable, Logger } from '@nestjs/common';
import { IResponse } from 'libs/interface/response.interface';
import { Model } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class NewsTypeService {
  constructor(
    @InjectModel(NewsType)
    private newsTypeModel: Model<NewsType>,
  ) {}
  private response: IResponse;

  async create(NewsType: NewsType) {
    const createArticleTag = new this.newsTypeModel({
      ...NewsType,
    });
    await createArticleTag.save();
    Logger.log(`新闻类型${NewsType.title}添加成功`);
    this.response = { code: 200, data: '', msg: '添加新闻类型成功' };
    return this.response;
  }

  async findAll() {
    const data = await this.newsTypeModel
      .find({ is_delete: false }, { __v: 0, is_delete: 0 })
      .sort('sort');

    const treeData = this.buildMenuTree(data, '0');
    console.log(treeData);
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
      .findOne({ _id: id, isDel: false })
      .then(async () => {
        const data = await this.newsTypeModel.findOne(
          { _id: id, isDel: false },
          { __v: 0, token: 0, createdAt: 0, updatedAt: 0, isDel: 0 },
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

  async update(_id: string, updateArticleTag: NewsType) {
    return await this.newsTypeModel
      .findOne({ _id, isDel: false })
      .then(async () => {
        await this.newsTypeModel.findOneAndUpdate(
          { _id },
          updateArticleTag,
          {},
        );
        Logger.log(`新闻类型${updateArticleTag.title}修改成功`);
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
  buildMenuTree(menuList: NewsType[], pid: string): NewsTypeTree[] {
    const result: NewsTypeTree[] = [];
    menuList.forEach((menu) => {
      let menuTree = new NewsTypeTree();
      menuTree = menu;
      console.log(menuTree);

      if (menu.pid === pid) {
        menuTree.children = this.buildMenuTree(menuList, menu._id);
        result.push(menuTree);
      }
    });
    return result;
  }
}
