import { Text, TextDot } from '@libs/db/models/text.model';
import { Injectable, Logger } from '@nestjs/common';
import { IResponse } from 'libs/interface/response.interface';
import { Model } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
@Injectable()
export class TextService {
  constructor(
    @InjectModel(Text)
    private textCModel: Model<Text>,
  ) {}
  private response: IResponse;

  async create(text: Text) {
    await this.textCModel
      .find()
      .collation({
        locale: 'zh',
        numericOrdering: true,
      })
      .sort({ text_id: -1 })
      .limit(1)
      .then(async (res) => {
        const text_id = +res[0].text_id + 1 + '';
        const createText = new this.textCModel({
          ...text,
          date: (new Date().getTime() / 1000).toFixed(0),
          is_delete: false,
          type_id: '69',
          text_id,
        });
        await createText.save();
        Logger.log(`图文${text.name}添加成功`);
        this.response = { code: 200, data: '', msg: '添加图文成功' };
        return this.response;
      });
  }

  async findAll(query) {
    const { pageNum, pageSize, ...params } = query;
    if (params.name) {
      params.name = { $regex: params.name, $options: 'i' };
    }
    const data = await this.textCModel
      .find({ ...params, is_delete: false }, { __v: 0, is_delete: 0 })
      .sort('sort')
      .skip(pageNum ? (pageNum - 1) * pageSize : 0)
      .limit(pageSize);
    const total = await this.textCModel.countDocuments({ ...params });
    this.response = {
      code: 200,
      msg: '图文列表',
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
    return await this.textCModel
      .findOne({ _id: id })
      .then(async () => {
        const data = await this.textCModel.findOne(
          { _id: id, is_delete: false },
          { __v: 0, createdAt: 0, updatedAt: 0, is_delete: 0 },
        );
        this.response = {
          code: 200,
          msg: '图文详情',
          data,
        };
        return this.response;
      })
      .catch(() => {
        return (this.response = {
          code: 500,
          msg: '图文不存在',
          data: '',
        });
      });
  }

  async update(_id: string, updateText: TextDot) {
    return await this.textCModel
      .findById(_id)
      .then(async () => {
        await this.textCModel.findByIdAndUpdate(_id, updateText, {});

        Logger.log(`图文${updateText.name}修改成功`);
        this.response = {
          code: 200,
          msg: '修改图文成功',
          data: '',
        };
        return this.response;
      })
      .catch(() => {
        return (this.response = {
          code: 500,
          msg: '图文不存在',
          data: '',
        });
      });
  }

  async remove(_id: string) {
    return await this.textCModel
      .findOne({ _id: _id })
      .then(async () => {
        await this.textCModel.findOneAndUpdate(
          { _id },
          { is_delete: true },
          {},
        );
        this.response = {
          code: 200,
          msg: '图文删除成功',
          data: '',
        };
        return this.response;
      })
      .catch((err) => {
        Logger.error(err);
        return (this.response = {
          code: 500,
          msg: '图文不存在',
          data: '',
        });
      });
  }
  async removeMany(ids: string[]) {
    return await this.textCModel
      .find({ _id: { $in: ids } })
      .then(async () => {
        await this.textCModel.updateMany(
          { _id: { $in: ids } },
          { is_delete: true },
          {},
        );
        this.response = {
          code: 200,
          msg: '批量删除成功',
          data: '',
        };
        return this.response;
      })
      .catch((err) => {
        return (this.response = {
          code: 500,
          msg: '图片不存在' + err.message,
          data: '',
        });
      });
  }
}
