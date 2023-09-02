import { Good } from '@libs/db/models/good.model';
import { GoodsImg } from '@libs/db/models/goods_img.model';
import { GoodsVideo } from '@libs/db/models/goods_video.model';
import { Injectable, Logger } from '@nestjs/common';
import { IResponse } from 'libs/interface/response.interface';
import { Model } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class GoodsService {
  constructor(
    @InjectModel(Good) private goodModel: Model<Good>,
    @InjectModel(GoodsImg) private goodsImgModel: Model<GoodsImg>,
    @InjectModel(GoodsVideo) private goodsVideoModel: Model<GoodsVideo>,
  ) {}
  private response: IResponse;
  async create(good: Good) {
    await this.goodModel
      .find()
      .collation({
        locale: 'zh',
        numericOrdering: true,
      })
      .sort({ goods_id: -1 })
      .limit(1)
      .then(async (res) => {
        const goods_id = +res[0].goods_id + 1 + '';
        const createGood = new this.goodModel({
          ...good,
          is_delete: false,
          date: (new Date().getTime() / 1000).toFixed(0),
          goods_id,
          type_id: '3',
        });
        await createGood.save();
        this.response = { code: 200, data: '', msg: '商品添加成功' };
        return this.response;
      });
  }
  async findAll(query) {
    const { pageNum, pageSize, ...params } = query;
    if (params.goods_name) {
      params.goods_name = { $regex: params.goods_name, $options: 'i' };
    }
    const total = await this.goodModel.countDocuments({
      ...params,
      is_delete: false,
    });
    const data = await this.goodModel
      .find({ ...params, is_delete: false }, { __v: 0, is_delete: 0 })
      .sort('sort')
      .skip(pageNum ? (pageNum - 1) * pageSize : 0)
      .limit(pageSize);
    //   查找商品关联图片数量
    const result = await Promise.all(
      data.map(async (item) => {
        const imgCount = await this.goodsImgModel.countDocuments({
          goods_id: item.goods_id,
        });
        const videoCount = await this.goodsVideoModel.countDocuments({
          goods_id: item.goods_id,
        });
        return {
          ...item._doc,
          imgCount,
          videoCount,
        };
      }),
    );

    this.response = {
      code: 200,
      msg: '商品列表',
      data: {
        list: result,
        total,
        pageNum: +pageNum,
        pageSize: +pageSize,
      },
    };
    return this.response;
  }
  async findOne(id: string) {
    const data = await this.goodModel.findOne(
      { goods_id: id, is_delete: false },
      { __v: 0, createdAt: 0, updatedAt: 0, is_delete: 0 },
    );
    this.response = { code: 200, data, msg: '商品详情' };
    return this.response;
  }

  async update(id: string, good: Good) {
    await this.goodModel.findByIdAndUpdate({ _id: id }, good);
    this.response = { code: 200, data: '', msg: '商品修改成功' };
  }
  async remove(_id: string) {
    return await this.goodModel
      .findOne({ _id })
      .then(async () => {
        await this.goodModel.findOneAndUpdate({ _id }, { is_delete: true }, {});
        this.response = {
          code: 200,
          msg: '商品删除成功',
          data: '',
        };
        return this.response;
      })
      .catch((err) => {
        Logger.error(err);
        return (this.response = {
          code: 500,
          msg: '商品不存在',
          data: '',
        });
      });
  }
  async removeMany(ids: string[]) {
    return await this.goodModel
      .find({ _id: { $in: ids } })
      .then(async () => {
        await this.goodModel.updateMany(
          { _id: { $in: ids } },
          { is_delete: true },
        );
        this.response = {
          code: 200,
          msg: '商品批量删除成功',
          data: '',
        };
        return this.response;
      })
      .catch((err) => {
        Logger.error(err);
        return (this.response = {
          code: 500,
          msg: '商品不存在',
          data: '',
        });
      });
  }
  async getData() {
    const data = await this.goodModel.find(
      { is_delete: false },
      { __v: 0, is_delete: 0, createdAt: 0, updatedAt: 0 },
    );
    this.response = {
      code: 200,
      msg: '商品列表',
      data,
    };
    return this.response;
  }
}
