import { Banner } from '@libs/db/models/banner.model';
import { Classify } from '@libs/db/models/classify.model';
import { Download } from '@libs/db/models/download.model';
import { Good } from '@libs/db/models/good.model';
import { GoodsVideo } from '@libs/db/models/goods_video.model';
import { Link } from '@libs/db/models/link.model';
import { Manage } from '@libs/db/models/manage.model';
import { Message } from '@libs/db/models/message.model';
import { News } from '@libs/db/models/news.model';
import { Site } from '@libs/db/models/site.model';
import { Text } from '@libs/db/models/text.model';
import { TextC } from '@libs/db/models/text_c.model';
import { VideoDown } from '@libs/db/models/video_down.model';
import { VideoUpload } from '@libs/db/models/video_upload.model';
import { Why } from '@libs/db/models/why.model';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class HomeDataService {
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
    @InjectModel(Site) private siteModel: Model<Site>,
  ) {}
  async getClassifyTree() {
    const bannerList = await this.bannerModel
      .find({ is_delete: false, status: '1' }, { __v: 0, is_delete: 0 })
      .sort('sort');
    const mountingInfo = await this.classifyModel.findOne(
      { is_delete: false, classify_id: '88' },
      { __v: 0, is_delete: 0 },
    );
    const mountingList = await this.goodModel
      .find(
        { is_delete: false, status: '1', goods_classify_id: '88' },
        { __v: 0, is_delete: 0 },
      )
      .sort('sort');
    const videoInfo = await this.classifyModel.findOne(
      { is_delete: false, classify_id: '70' },
      { __v: 0, is_delete: 0 },
    );
    const videoList = await this.videoUploadModel
      .find(
        { is_delete: false, status: '1', pid: '70' },
        { __v: 0, is_delete: 0 },
      )
      .sort('sort');
    const picture = await this.classifyModel.findOne(
      { is_delete: false, classify_id: '68' },
      { __v: 0, is_delete: 0 },
    );
    return {
      bannerList,
      picture,
      mounting: {
        ...mountingInfo._doc,
        children: mountingList,
      },
      video: {
        ...videoInfo._doc,
        children: videoList,
      },
    };
  }
  async getTree(pid: string) {
    const data = await this.classifyModel
      .find(
        { is_delete: false, classify_pid: pid, is_hide: false },
        { classify_id: 1, classify_name: 1, classify_url: 1 },
      )
      .sort('sort');
    const tree = await Promise.all(
      data.map(async (item) => {
        const children = await this.getTree(item.classify_id);
        return {
          ...item._doc,
          children,
        };
      }),
    );
    return tree;
  }
  async getFootData() {
    const links = await this.classifyModel.find(
      { classify_pid: '74', is_delete: false },
      { __v: 0, is_delete: 0 },
    );
    const logo = await this.classifyModel.findOne({
      classify_id: '73',
      is_delete: false,
    });
    85;
    const footBg = await this.classifyModel.findOne({
      classify_id: '90',
      is_delete: false,
    });
    const technology = await this.classifyModel.find(
      { classify_pid: '85', is_delete: false },
      { __v: 0, is_delete: 0 },
    );
    const menu = await this.classifyModel.find(
      { classify_id: { $in: ['12', '10', '9', '103'] }, is_delete: false },
      { __v: 0, is_delete: 0 },
    );
    const result = await Promise.all(
      menu.map(async (item) => {
        if (item.classify_id === '9') {
          const children = await this.classifyModel.find({
            classify_id: { $in: ['57', '149'] },
          });
          return {
            ...item._doc,
            children,
          };
        }
        const children = await this.classifyModel.find({
          classify_pid: item.classify_id,
        });
        return {
          ...item._doc,
          children,
        };
      }),
    );
    return {
      links,
      technology,
      logo,
      footBg,
      menu: result,
    };
  }
  async getHeaderData() {
    const data = await this.getTree('2');
    return {
      code: 200,
      msg: '头部数据',
      data,
    };
  }
  async getLinks() {
    const data = await this.classifyModel
      .find(
        { classify_pid: '143', is_delete: false },
        { classify_id: 1, classify_name: 1, classify_url: 1 },
      )
      .sort('sort');
    return data;
  }
  async getFootLinks() {
    const data = await this.classifyModel.find(
      {
        classify_id: { $in: ['20', '25'] },
      },
      { classify_id: 1, classify_name: 1, classify_url: 1 },
    );
    return data;
  }
  async getWebSite() {
    const data = await this.siteModel.findOne({ site_id: '1' });
    return data;
  }
  async getHeaderOther() {
    const other = await this.classifyModel.findOne(
      {
        classify_id: '148',
        is_delete: false,
      },
      {
        classify_id: 1,
        classify_name: 1,
        sub_name: 1,
        classify_img: 1,
        classify_url: 1,
      },
    );
    const coverList = await this.goodModel.find(
      {
        goods_classify_id: '67',
        is_delete: false,
      },
      { goods_id: 1, goods_name: 1, goods_classify_id: 1 },
    );
    const carList = await this.classifyModel.find(
      { classify_pid: '120', is_delete: false },
      {
        classify_id: 1,
        classify_name: 1,
        classify_url: 1,
      },
    );
    const solution = await this.classifyModel
      .find({
        classify_pid: '9',
        classify_id: { $in: ['151', '152', '160'] },
        is_delete: false,
      })
      .sort('sort');
    const solutionList = await Promise.all(
      solution.map(async (item) => {
        const children = await this.classifyModel.find({
          classify_pid: item.classify_id,
          is_delete: false,
        });
        return {
          ...item._doc,
          children,
        };
      }),
    );
    return {
      other,
      coverList,
      carList,
      solutionList,
    };
  }
  async getHomeVideo() {
    const data = await this.classifyModel.findOne({ classify_id: '70' });
    const videoList = await this.videoUploadModel.find({
      pid: '70',
      is_delete: false,
    });
    const child = await this.classifyModel.find({ classify_pid: '70' });
    const children = await Promise.all(
      child.map(async (item) => {
        const list = await this.videoUploadModel.find({
          pid: item.classify_id,
          is_delete: false,
        });
        return {
          ...item._doc,
          children: list,
        };
      }),
    );
    return {
      data,
      videoList,
      children,
    };
  }
}
