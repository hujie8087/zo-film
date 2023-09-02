import { GoodsVideo, GoodsVideoDot } from '@libs/db/models/goods_video.model';
import { Injectable, Logger } from '@nestjs/common';
import { IResponse } from 'libs/interface/response.interface';
import { Model } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
@Injectable()
export class GoodsVideoService {
  constructor(
    @InjectModel(GoodsVideo)
    private goodsVideoModel: Model<GoodsVideo>,
  ) {}
  private response: IResponse;

  async create(goodsVideo: GoodsVideo) {
    await this.goodsVideoModel
      .find()
      .collation({
        locale: 'zh',
        numericOrdering: true,
      })
      .sort({ goods_video_id: -1 })
      .limit(1)
      .then(async (res) => {
        const goods_video_id = +res[0].goods_video_id + 1 + '';
        const createNewsType = new this.goodsVideoModel({
          ...goodsVideo,
          date: (new Date().getTime() / 1000).toFixed(0),
          is_delete: false,
          type_id: '70',
          goods_video_id,
        });
        await createNewsType.save();
        Logger.log(`图片${goodsVideo.name}添加成功`);
        this.response = { code: 200, data: '', msg: '添加图片成功' };
        return this.response;
      });
  }

  async findAll(query) {
    const { pageNum, pageSize, ...params } = query;
    const data = await this.goodsVideoModel
      .find({ ...params, is_delete: false }, { __v: 0, is_delete: 0 })
      .sort('sort')
      .skip(pageNum ? (pageNum - 1) * pageSize : 0)
      .limit(pageSize);
    const total = await this.goodsVideoModel.countDocuments({ ...params });
    this.response = {
      code: 200,
      msg: '产品视频列表',
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
    return await this.goodsVideoModel
      .findOne({ _id: id })
      .then(async () => {
        const data = await this.goodsVideoModel.findOne(
          { _id: id, is_delete: false },
          { __v: 0, createdAt: 0, updatedAt: 0, is_delete: 0 },
        );
        this.response = {
          code: 200,
          msg: '产品视频详情',
          data,
        };
        return this.response;
      })
      .catch(() => {
        return (this.response = {
          code: 500,
          msg: '产品视频不存在',
          data: '',
        });
      });
  }

  async update(_id: string, updateGoodsVideo: GoodsVideoDot) {
    return await this.goodsVideoModel
      .findById(_id)
      .then(async () => {
        await this.goodsVideoModel.findByIdAndUpdate(_id, updateGoodsVideo, {});

        Logger.log(`产品视频${updateGoodsVideo.name}修改成功`);
        this.response = {
          code: 200,
          msg: '修改产品视频成功',
          data: '',
        };
        return this.response;
      })
      .catch(() => {
        return (this.response = {
          code: 500,
          msg: '产品视频不存在',
          data: '',
        });
      });
  }

  async remove(_id: string) {
    return await this.goodsVideoModel
      .findOne({ _id: _id })
      .then(async () => {
        await this.goodsVideoModel.findOneAndUpdate(
          { _id },
          { is_delete: true },
          {},
        );
        this.response = {
          code: 200,
          msg: '产品视频删除成功',
          data: '',
        };
        return this.response;
      })
      .catch((err) => {
        Logger.error(err);
        return (this.response = {
          code: 500,
          msg: '产品视频不存在',
          data: '',
        });
      });
  }
  async removeMany(ids: string[]) {
    return await this.goodsVideoModel
      .find({ _id: { $in: ids } })
      .then(async () => {
        await this.goodsVideoModel.updateMany(
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
          msg: '视频不存在' + err.message,
          data: '',
        });
      });
  }
}
