import { Classify } from '@libs/db/models/classify.model';
import { Good } from '@libs/db/models/good.model';
import { GoodsImg } from '@libs/db/models/goods_img.model';
import { GoodsVideo } from '@libs/db/models/goods_video.model';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Classify) private readonly classifyModel: Model<Classify>,
    @InjectModel(Good) private readonly goodModel: Model<Good>,
    @InjectModel(GoodsImg) private readonly goodsImgModel: Model<GoodsImg>,
    @InjectModel(GoodsVideo)
    private readonly goodsVideoModel: Model<GoodsVideo>,
  ) {}

  async findProduct() {
    const data = await this.classifyModel.findOne({
      classify_id: '7',
      is_delete: false,
    });
    const children = await this.classifyModel.find({
      classify_pid: '7',
      is_delete: false,
    });
    return {
      ...data._doc,
      children,
    };
  }

  async findCover(id: string) {
    const data = await this.classifyModel.findOne({
      classify_id: id,
      is_delete: false,
    });
    const children = await this.goodModel
      .find({
        goods_classify_id: id,
        is_delete: false,
      })
      .sort({ sort: -1 });
    const video = await this.classifyModel.findOne({ classify_pid: id });
    const detailList =
      id === '88'
        ? await this.goodModel
            .find({
              goods_classify_id: '147',
              is_delete: false,
            })
            .sort({ sort: -1 })
        : [];
    return {
      ...data._doc,
      children,
      video,
      detailList,
    };
  }
  async findGoodDetail(id: string) {
    const data = await this.goodModel.findOne({
      goods_id: id,
      is_delete: false,
    });
    const imgList = await this.goodsImgModel.find({
      goods_id: id,
      is_delete: false,
    });
    const videoList = await this.goodsVideoModel.find({
      goods_id: id,
      is_delete: false,
    });
    return {
      data,
      imgList,
      videoList,
    };
  }
  async findConstruction() {
    const data = await this.classifyModel.findOne(
      {
        classify_id: '103',
        is_delete: false,
      },
      { classify_id: 1, classify_name: 1, classify_intro: 1, classify_img: 1 },
    );
    const children = await this.classifyModel.find({
      classify_pid: '103',
      is_delete: false,
    });
    return {
      ...data._doc,
      children,
    };
  }
  async findConstructionDetail(id: string) {
    const data = await this.classifyModel.findOne({
      classify_id: id,
      is_delete: false,
    });
    const children = await this.classifyModel
      .find({
        classify_pid: id,
        is_delete: false,
      })
      .sort('sort');
    return {
      ...data._doc,
      children,
    };
  }
  async findCarList(pid = '101') {
    const data = await this.classifyModel
      .findOne({ is_delete: false, classify_id: pid, is_hide: false })
      .sort('sort');
    const child = await this.classifyModel.find({
      classify_pid: data.classify_id,
    });
    const children = await Promise.all(
      child.map(async (item) => {
        const children = await this.classifyModel
          .find({
            classify_pid: item.classify_id,
            is_delete: false,
          })
          .sort('sort');
        return {
          ...item._doc,
          children,
        };
      }),
    );
    return {
      ...data._doc,
      children,
    };
  }
}
