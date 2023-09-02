import { InjectModel } from 'nestjs-typegoose';
import { Injectable } from '@nestjs/common';
import { Classify, ClassifyDot } from '@libs/db/models/classify.model';
import { Banner, BannerDot } from '@libs/db/models/banner.model';
import { Model } from 'mongoose';
import { IResponse } from 'libs/interface/response.interface';
import { Good } from '@libs/db/models/good.model';
import { GoodsVideo } from '@libs/db/models/goods_video.model';
import { VideoUpload } from '@libs/db/models/video_upload.model';
import { Why } from '@libs/db/models/why.model';
import { News } from '@libs/db/models/news.model';
import { TextC } from '@libs/db/models/text_c.model';
import { VideoDown } from '@libs/db/models/video_down.model';
import { Download } from '@libs/db/models/download.model';
import { Link } from '@libs/db/models/link.model';
import { Text } from '@libs/db/models/text.model';
import { Message } from '@libs/db/models/message.model';
import { Manage } from '@libs/db/models/manage.model';

@Injectable()
export class HomeService {
  constructor(
    @InjectModel(Banner) private bannerModel: Model<Banner>,
    @InjectModel(Classify) private classifyModel: Model<Classify>,
    @InjectModel(Good) private goodModel: Model<Good>,
    @InjectModel(GoodsVideo) private goodsVideoModel: Model<GoodsVideo>,
    @InjectModel(VideoUpload) private videoUploadModel: Model<VideoUpload>,
    @InjectModel(Why) private whyModel: Model<Why>,
    @InjectModel(News) private newsModel: Model<News>,
    @InjectModel(TextC) private textCModel: Model<TextC>,
    @InjectModel(VideoDown) private videoDownModel: Model<VideoDown>,
    @InjectModel(Download) private downloadModel: Model<Download>,
    @InjectModel(Link) private linkModel: Model<Link>,
    @InjectModel(Text) private textModel: Model<Text>,
    @InjectModel(Message) private messageModel: Model<Message>,
    @InjectModel(Manage) private manageModel: Model<Manage>,
  ) {}
  private response: IResponse;
  async getBanner() {
    const data = await this.bannerModel
      .find({ is_delete: false }, { __v: 0, is_delete: 0 })
      .sort('sort');
    this.response = {
      code: 200,
      msg: '轮播图列表',
      data: {
        list: data,
      },
    };
    return this.response;
  }
  async createBanner(banner: Banner) {
    await this.bannerModel
      .find()
      .collation({
        locale: 'zh',
        numericOrdering: true,
      })
      .sort({ banner_id: -1 })
      .limit(1)
      .then(async (res) => {
        const banner_id = +res[0].banner_id + 1 + '';
        const createBanner = new this.bannerModel({
          ...banner,
          date: (new Date().getTime() / 1000).toFixed(0),
          is_delete: false,
          type_id: '6',
          banner_id,
        });
        await createBanner.save();
        this.response = { code: 200, data: '', msg: '添加轮播图成功' };
        return this.response;
      });
  }
  async updateBanner(banner: BannerDot) {
    await this.bannerModel.updateOne({ _id: banner._id }, banner);
    this.response = { code: 200, data: '', msg: '修改轮播图成功' };
    return this.response;
  }
  async deleteBanner(id: string) {
    await this.bannerModel.updateOne({ _id: id }, { is_delete: true });
    this.response = { code: 200, data: '', msg: '删除轮播图成功' };
    return this.response;
  }
  async getClassifyList(query) {
    const { ...params } = query;
    const data = await this.classifyModel.find(
      { ...params, is_delete: false },
      { __v: 0, is_delete: 0 },
    );
    this.response = {
      code: 200,
      msg: 'success',
      data,
    };
    return this.response;
  }
  async getClassify(query) {
    const { pageSize, pageNum, ...params } = query;
    const data = await this.classifyModel.find(
      { ...params, is_delete: false },
      { __v: 0, is_delete: 0 },
    );
    const total = await this.classifyModel
      .find({ ...params, is_delete: false })
      .countDocuments();
    this.response = {
      code: 200,
      msg: 'success',
      data: {
        list: data,
        total,
        pageNum: +pageNum,
        pageSize: +pageSize,
      },
    };
    return this.response;
  }
  async createClassify(classify: Classify) {
    await this.classifyModel
      .find()
      .collation({ locale: 'zh', numericOrdering: true })
      .sort({ classify_id: -1 })
      .limit(1)
      .then(async (res) => {
        const classify_id = +res[0].classify_id + 1 + '';
        const createClassify = new this.classifyModel({
          ...classify,
          date: (new Date().getTime() / 1000).toFixed(0),
          is_delete: false,
          classify_id,
        });
        await createClassify.save();
        this.response = { code: 200, data: '', msg: '添加栏目成功' };
        return this.response;
      });
  }
  async updateClassify(classify: ClassifyDot) {
    await this.classifyModel.updateOne({ _id: classify._id }, classify);
    this.response = { code: 200, data: '', msg: '修改栏目成功' };
    return this.response;
  }
  async deleteClassify(id: string) {
    await this.classifyModel.updateOne({ _id: id }, { is_delete: true });
    this.response = { code: 200, data: '', msg: '删除栏目成功' };
    return this.response;
  }
  async getClassifyById(id: string) {
    const data = await this.classifyModel.findOne({ classify_id: id });
    if (data) {
      this.response = { code: 200, data, msg: '获取栏目成功' };
      return this.response;
    } else {
      this.response = { code: 400, data: '', msg: '获取栏目失败' };
      return this.response;
    }
  }
  async getClassifyTree(pid: string) {
    const data = await this.getTree(pid);
    this.response = {
      code: 200,
      msg: '分类列表',
      data: {
        list: data,
      },
    };
    return this.response;
  }
  async getTree(pid: string) {
    const data = await this.classifyModel
      .find({ is_delete: false, classify_pid: pid }, { __v: 0, is_delete: 0 })
      .sort('sort');
    const tree = await Promise.all(
      data.map(async (item) => {
        let listCount;
        if (item.type_id === '6') {
          listCount = await this.bannerModel.countDocuments({
            is_delete: false,
          });
        } else if (item.type_id === '3') {
          listCount = await this.goodModel.countDocuments({
            is_delete: false,
            goods_classify_id: item.classify_id,
          });
        } else if (item.type_id === '72') {
          listCount = await this.videoUploadModel.countDocuments({
            is_delete: false,
            pid: item.classify_id,
          });
        } else if (item.type_id === '73') {
          listCount = await this.whyModel.countDocuments({
            is_delete: false,
            classify_id: item.classify_id,
          });
        } else if (item.type_id === '14') {
          listCount = await this.newsModel.countDocuments({
            is_delete: false,
            pid: item.classify_id,
          });
        } else if (item.type_id === '65') {
          listCount = await this.textCModel.countDocuments({
            is_delete: false,
            classify_id: item.classify_id,
          });
        } else if (item.type_id === '68') {
          listCount = await this.videoDownModel.countDocuments({
            is_delete: false,
            classify_id: item.classify_id,
          });
        } else if (item.type_id === '43') {
          listCount = await this.downloadModel.countDocuments({
            is_delete: false,
            classify_id: item.classify_id,
          });
        } else if (item.type_id === '7') {
          listCount = await this.linkModel.countDocuments({
            is_delete: false,
            classify_id: item.classify_id,
          });
        } else if (item.type_id === '69') {
          listCount = await this.textModel.countDocuments({
            is_delete: false,
            classify_id: item.classify_id,
          });
        } else if (item.type_id === '11') {
          listCount = await this.messageModel.countDocuments({
            is_delete: false,
          });
        } else if (item.type_id === '63') {
          listCount = await this.manageModel.countDocuments({
            is_delete: false,
            classify_id: item.classify_id,
          });
        }
        const children = await this.getTree(item.classify_id);
        return {
          ...item._doc,
          children,
          listCount,
        };
      }),
    );
    return tree;
  }
}
