import { Classify } from '@libs/db/models/classify.model';
import { Why, WhyDot } from '@libs/db/models/why.model';
import { Injectable } from '@nestjs/common';
import { IResponse } from 'libs/interface/response.interface';
import { Model } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class WhyService {
  constructor(
    @InjectModel(Why) private readonly whyModel: Model<Why>,
    @InjectModel(Classify) private readonly classifyModel: Model<Classify>,
  ) {}
  private response: IResponse;
  async create(body: Why) {
    await this.whyModel
      .find({})
      .collation({ locale: 'zh', numericOrdering: true })
      .sort({ why_id: -1 })
      .limit(1)
      .then(async (res) => {
        const why_id = +res[0].why_id + 1 + '';
        const createWhy = new this.whyModel({
          ...body,
          is_delete: false,
          type_id: '73',
          why_id,
        });
        await createWhy.save();
        this.response = { code: 200, data: '', msg: '添加成功' };
        return this.response;
      });
  }

  async findAll(query) {
    const { pageNum, pageSize, ...params } = query;
    const data = await this.whyModel
      .find({ ...params, is_delete: false }, { __v: 0, is_delete: 0 })
      .sort('sort')
      .skip(pageNum ? (pageNum - 1) * pageSize : 0)
      .limit(pageSize);
    const total = await this.whyModel.countDocuments({ ...params });
    // 根据date里的classify_id查找classify_name
    const result = await Promise.all(
      data.map(async (item) => {
        const classify = await this.classifyModel.findOne({
          classify_id: item.classify_id,
        });
        return {
          ...item._doc,
          classify_name: classify.classify_name,
        };
      }),
    );
    this.response = {
      code: 200,
      msg: '列表',
      data: {
        list: result,
        total: total,
        pageNum: +pageNum,
        pageSize: +pageSize,
      },
    };
    return this.response;
  }

  async findOne(id: string) {
    return await this.whyModel
      .findOne({ _id: id })
      .then(async () => {
        const data = await this.whyModel.findOne(
          { _id: id, is_delete: false },
          { __v: 0, createdAt: 0, updatedAt: 0, is_delete: 0 },
        );
        this.response = {
          code: 200,
          msg: '详情',
          data,
        };
        return this.response;
      })
      .catch(() => {
        this.response = {
          code: 500,
          msg: '获取失败',
          data: '',
        };
        return this.response;
      });
  }

  async update(id: string, updateWhyDto: WhyDot) {
    return await this.whyModel
      .findById(id)
      .then(async () => {
        await this.whyModel.findByIdAndUpdate(id, updateWhyDto, {});
        this.response = {
          code: 200,
          msg: '修改成功',
          data: '',
        };
        return this.response;
      })
      .catch(() => {
        return (this.response = {
          code: 500,
          msg: '内容不存在',
          data: '',
        });
      });
  }

  async remove(id: string) {
    return await this.whyModel
      .findOne({ _id: id })
      .then(async () => {
        await this.whyModel.findOneAndUpdate(
          { _id: id },
          { is_delete: true },
          {},
        );
        this.response = {
          code: 200,
          msg: '内容删除成功',
          data: '',
        };
        return this.response;
      })
      .catch(() => {
        return (this.response = {
          code: 500,
          msg: '内容不存在',
          data: '',
        });
      });
  }

  async removeMany(ids: string[]) {
    return await this.whyModel
      .find({ _id: { $in: ids } })
      .then(async () => {
        await this.whyModel.updateMany(
          { _id: { $in: ids } },
          { is_delete: true },
          {},
        );
        this.response = {
          code: 200,
          msg: '内容批量删除成功',
          data: '',
        };
        return this.response;
      })
      .catch((err) => {
        return (this.response = {
          code: 500,
          msg: '内容不存在' + err.message,
          data: '',
        });
      });
  }
}
