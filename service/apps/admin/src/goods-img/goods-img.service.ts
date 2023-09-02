import { GoodsImg, GoodsImgDot } from '@libs/db/models/goods_img.model';
import { Injectable, Logger } from '@nestjs/common';
import { IResponse } from 'libs/interface/response.interface';
import { Model } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
@Injectable()
export class GoodsImgService {
  constructor(
    @InjectModel(GoodsImg)
    private goodsImgModel: Model<GoodsImg>,
  ) {}
  private response: IResponse;

  async create(goodsImg: GoodsImg) {
    await this.goodsImgModel
      .find()
      .collation({
        locale: 'zh',
        numericOrdering: true,
      })
      .sort({ goods_imgs_id: -1 })
      .limit(1)
      .then(async (res) => {
        const goods_imgs_id = +res[0].goods_imgs_id + 1 + '';
        const createNewsType = new this.goodsImgModel({
          ...goodsImg,
          date: (new Date().getTime() / 1000).toFixed(0),
          is_delete: false,
          type_id: '71',
          goods_imgs_id,
        });
        await createNewsType.save();
        Logger.log(`图片${goodsImg.name}添加成功`);
        this.response = { code: 200, data: '', msg: '添加图片成功' };
        return this.response;
      });
  }

  async findAll(query) {
    const { pageNum, pageSize, ...params } = query;
    if (params.name) {
      params.name = { $regex: params.name, $options: 'i' };
    }
    const data = await this.goodsImgModel
      .find({ ...params, is_delete: false }, { __v: 0, is_delete: 0 })
      .sort('sort')
      .skip(pageNum ? (pageNum - 1) * pageSize : 0)
      .limit(pageSize);
    const total = await this.goodsImgModel.countDocuments({ ...params });
    this.response = {
      code: 200,
      msg: '商品图片列表',
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
    return await this.goodsImgModel
      .findOne({ _id: id })
      .then(async () => {
        const data = await this.goodsImgModel.findOne(
          { _id: id, is_delete: false },
          { __v: 0, createdAt: 0, updatedAt: 0, is_delete: 0 },
        );
        this.response = {
          code: 200,
          msg: '产品图片详情',
          data,
        };
        return this.response;
      })
      .catch(() => {
        return (this.response = {
          code: 500,
          msg: '产品图片不存在',
          data: '',
        });
      });
  }

  async update(_id: string, updateGoodsImg: GoodsImgDot) {
    return await this.goodsImgModel
      .findById(_id)
      .then(async () => {
        await this.goodsImgModel.findByIdAndUpdate(_id, updateGoodsImg, {});

        Logger.log(`商品图片${updateGoodsImg.name}修改成功`);
        this.response = {
          code: 200,
          msg: '修改商品图片成功',
          data: '',
        };
        return this.response;
      })
      .catch(() => {
        return (this.response = {
          code: 500,
          msg: '商品图片不存在',
          data: '',
        });
      });
  }

  async remove(_id: string) {
    return await this.goodsImgModel
      .findOne({ _id: _id })
      .then(async () => {
        await this.goodsImgModel.findOneAndUpdate(
          { _id },
          { is_delete: true },
          {},
        );
        this.response = {
          code: 200,
          msg: '商品图片删除成功',
          data: '',
        };
        return this.response;
      })
      .catch((err) => {
        Logger.error(err);
        return (this.response = {
          code: 500,
          msg: '商品图片不存在',
          data: '',
        });
      });
  }
  async removeMany(ids: string[]) {
    return await this.goodsImgModel
      .find({ _id: { $in: ids } })
      .then(async () => {
        await this.goodsImgModel.updateMany(
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
