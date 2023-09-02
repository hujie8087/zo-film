import { Region } from '@libs/db/models/region.model';
import { Store, StoreDot } from '@libs/db/models/store.model';
import { Injectable } from '@nestjs/common';
import { IResponse } from 'libs/interface/response.interface';
import { Model } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class StoreService {
  constructor(
    @InjectModel(Store) private readonly storeModel: Model<Store>,
    @InjectModel(Region) private readonly regionModel: Model<Region>,
  ) {}
  private response: IResponse;

  async create(body: Store) {
    await this.storeModel
      .find()
      .collation({ locale: 'zh', numericOrdering: true })
      .sort({ store_id: -1 })
      .limit(1)
      .then(async (res) => {
        const createStore = new this.storeModel({
          ...body,
          type_id: '66',
          date: (new Date().getTime() / 1000).toFixed(0),
          store_id: +res[0].store_id + 1 + '',
        });
        await createStore.save();
        this.response = { code: 200, data: '', msg: '添加门店成功' };
        return this.response;
      });
  }

  async findAll(query) {
    const { pageNum, pageSize, ...params } = query;
    if (params.name) {
      params.name = { $regex: params.name, $options: 'i' };
    }
    const data = await this.storeModel
      .find({ ...params }, { __v: 0 })
      .sort('sort')
      .skip(pageNum ? (pageNum - 1) * pageSize : 0)
      .limit(pageSize);
    // 根据date里的province查找provincename
    const result = await Promise.all(
      data.map(async (item) => {
        const province = await this.regionModel.findOne({
          region_id: item.province,
        });
        const city = await this.regionModel.findOne({
          region_id: item.city,
        });
        return {
          ...item._doc,
          province_name: province ? province.region_name : '',
          city_name: city ? city.region_name : '',
        };
      }),
    );
    const total = await this.storeModel.countDocuments({ ...params });
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
    return await this.storeModel
      .findOne({ _id: id })
      .then(async () => {
        const data = await this.storeModel.findOne(
          { _id: id },
          { __v: 0, createdAt: 0, updatedAt: 0 },
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

  async update(id: string, body: StoreDot) {
    return await this.storeModel
      .findById(id)
      .then(async () => {
        await this.storeModel.findByIdAndUpdate(id, body, {});
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
    return await this.storeModel
      .findOne({ _id: id })
      .then(async () => {
        await this.storeModel.findOneAndRemove({ _id: id }, {});
        this.response = {
          code: 200,
          msg: '删除成功',
          data: '',
        };
        return this.response;
      })
      .catch((err) => {
        return (this.response = {
          code: 500,
          msg: '门店不存在',
          data: '',
        });
      });
  }
  async removeMany(ids: string[]) {
    return await this.storeModel
      .find({ _id: { $in: ids } })
      .then(async () => {
        await this.storeModel.deleteMany({ _id: { $in: ids } });
        this.response = {
          code: 200,
          msg: '删除成功',
          data: '',
        };
        return this.response;
      })
      .catch((err) => {
        return (this.response = {
          code: 500,
          msg: '门店不存在',
          data: '',
        });
      });
  }

  async findFilterRegin(pid) {
    const data = await this.regionModel.find({ region_pid: pid }, { __v: 0 });
    this.response = {
      code: 200,
      msg: '列表',
      data: {
        list: data,
      },
    };
    return this.response;
  }
}
