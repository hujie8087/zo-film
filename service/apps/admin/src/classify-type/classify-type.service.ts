import {
  ClassifyType,
  ClassifyTypeDot,
} from '@libs/db/models/classify_type.model';
import { Injectable, Logger } from '@nestjs/common';
import { IResponse } from 'libs/interface/response.interface';
import { Model } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
@Injectable()
export class ClassifyTypeService {
  constructor(
    @InjectModel(ClassifyType)
    private classify_typeModel: Model<ClassifyType>,
  ) {}
  private response: IResponse;

  async create(classify_type: ClassifyType) {
    await this.classify_typeModel
      .find()
      .collation({
        locale: 'zh',
        numericOrdering: true,
      })
      .sort({ type_id: -1 })
      .limit(1)
      .then(async (res) => {
        const type_id = +res[0].type_id + 1 + '';
        const createClassifyType = new this.classify_typeModel({
          ...classify_type,
          date: (new Date().getTime() / 1000).toFixed(0),
          is_delete: false,
          type_id,
        });
        await createClassifyType.save();
        Logger.log(`类型${classify_type.type_name}添加成功`);
        this.response = { code: 200, data: '', msg: '添加类型成功' };
        return this.response;
      });
  }

  async findAll(query) {
    const { ...params } = query;
    const data = await this.classify_typeModel.find(
      { ...params, is_delete: false },
      { __v: 0, is_delete: 0 },
    );
    this.response = {
      code: 200,
      msg: '类型列表',
      data,
    };
    return this.response;
  }

  async findOne(id: string) {
    return await this.classify_typeModel
      .findOne({ _id: id })
      .then(async () => {
        const data = await this.classify_typeModel.findOne(
          { _id: id, is_delete: false },
          { __v: 0, createdAt: 0, updatedAt: 0, is_delete: 0 },
        );
        this.response = {
          code: 200,
          msg: '类型详情',
          data,
        };
        return this.response;
      })
      .catch(() => {
        return (this.response = {
          code: 500,
          msg: '类型不存在',
          data: '',
        });
      });
  }

  async update(_id: string, updateClassifyTypeDto: ClassifyTypeDot) {
    return await this.classify_typeModel
      .findById(_id)
      .then(async () => {
        await this.classify_typeModel.findByIdAndUpdate(
          _id,
          updateClassifyTypeDto,
          {},
        );

        Logger.log(`类型${updateClassifyTypeDto.type_name}修改成功`);
        this.response = {
          code: 200,
          msg: '修改类型成功',
          data: '',
        };
        return this.response;
      })
      .catch(() => {
        return (this.response = {
          code: 500,
          msg: '类型不存在',
          data: '',
        });
      });
  }

  async remove(_id: string) {
    return await this.classify_typeModel
      .findOne({ _id: _id })
      .then(async () => {
        await this.classify_typeModel.findOneAndUpdate(
          { _id },
          { is_delete: true },
          {},
        );
        this.response = {
          code: 200,
          msg: '类型删除成功',
          data: '',
        };
        return this.response;
      })
      .catch((err) => {
        Logger.error(err);
        return (this.response = {
          code: 500,
          msg: '类型不存在',
          data: '',
        });
      });
  }
}
