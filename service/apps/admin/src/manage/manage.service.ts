import { Classify } from '@libs/db/models/classify.model';
import { Manage, ManageDot } from '@libs/db/models/manage.model';
import { Injectable } from '@nestjs/common';
import { IResponse } from 'libs/interface/response.interface';
import { Model } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class ManageService {
  constructor(
    @InjectModel(Manage) private readonly manageModel: Model<Manage>,
    @InjectModel(Classify) private readonly classifyModel: Model<Classify>,
  ) {}
  private response: IResponse;
  async create(body: Manage) {
    return await this.manageModel
      .find()
      .collation({
        locale: 'zh',
        numericOrdering: true,
      })
      .sort({ manage_id: -1 })
      .limit(1)
      .then(async (res) => {
        const manage_id = +res[0].manage_id + 1 + '';
        const createMessage = new this.manageModel({
          ...body,
          date: (new Date().getTime() / 1000).toFixed(0),
          is_delete: false,
          type_id: '63',
          manage_id,
        });
        await createMessage.save();
        return { code: 200, data: '', msg: '添加成功' };
      });
  }
  async findAll(query) {
    const { pageNum, pageSize, ...params } = query;
    if (params.name) {
      params.name = { $regex: params.name, $options: 'i' };
    }
    const data = await this.manageModel
      .find({ ...params, is_delete: false }, { __v: 0 })
      .sort('date')
      .skip(pageNum ? (pageNum - 1) * pageSize : 0)
      .limit(pageSize);
    const total = await this.manageModel.countDocuments({
      ...params,
      is_delete: false,
    });

    this.response = {
      code: 200,
      msg: '列表',
      data: {
        list: data,
        total: total,
        pageNum: +pageNum,
        pageSize: +pageSize,
      },
    };
    return this.response;
  }
  async findOne(id: string) {
    return await this.manageModel
      .findOne({ _id: id })
      .then(async () => {
        const data = await this.manageModel.findOne(
          { _id: id, is_delete: false },
          { __v: 0, createdAt: 0, updatedAt: 0, is_delete: 0 },
        );
        this.response = {
          code: 200,
          msg: '管理信息详情',
          data,
        };
        return this.response;
      })
      .catch(() => {
        this.response = {
          code: 500,
          msg: '管理信息详情失败',
          data: '',
        };
        return this.response;
      });
  }
  async update(id: string, body: ManageDot) {
    return await this.manageModel
      .updateOne({ _id: id }, body)
      .then(() => {
        this.response = {
          code: 200,
          msg: '管理信息修改成功',
          data: '',
        };
        return this.response;
      })
      .catch(() => {
        this.response = {
          code: 500,
          msg: '管理信息修改失败',
          data: '',
        };
        return this.response;
      });
  }
  async remove(id: string) {
    return await this.manageModel
      .findOne({ _id: id })
      .then(async () => {
        await this.manageModel.findOneAndUpdate(
          { _id: id },
          { is_delete: true },
          {},
        );
        this.response = {
          code: 200,
          msg: '管理信息删除成功',
          data: '',
        };
        return this.response;
      })
      .catch((err) => {
        return (this.response = {
          code: 500,
          msg: '管理信息不存在' + err.message,
          data: '',
        });
      });
  }

  async removeMany(ids: string[]) {
    return await this.manageModel
      .find({ _id: { $in: ids } })
      .then(async () => {
        await this.manageModel.updateMany(
          { _id: { $in: ids } },
          { is_delete: true },
          {},
        );
        this.response = {
          code: 200,
          msg: '管理信息批量删除成功',
          data: '',
        };
        return this.response;
      })
      .catch((err) => {
        return (this.response = {
          code: 500,
          msg: '管理信息不存在' + err.message,
          data: '',
        });
      });
  }
}
