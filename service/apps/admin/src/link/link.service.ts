import { Link, LinkDot } from '@libs/db/models/link.model';
import { Injectable, Logger } from '@nestjs/common';
import { IResponse } from 'libs/interface/response.interface';
import { Model } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
@Injectable()
export class LinkService {
  constructor(
    @InjectModel(Link)
    private linkModel: Model<Link>,
  ) {}
  private response: IResponse;

  async create(link: Link) {
    await this.linkModel
      .find()
      .collation({
        locale: 'zh',
        numericOrdering: true,
      })
      .sort({ link_id: -1 })
      .limit(1)
      .then(async (res) => {
        const link_id = +res[0].link_id + 1 + '';
        const createLink = new this.linkModel({
          ...link,
          type_id: '7',
          date: (new Date().getTime() / 1000).toFixed(0),
          is_delete: false,
          link_id,
        });
        await createLink.save();
        Logger.log(`友情链接${link.link_name}添加成功`);
        this.response = { code: 200, data: '', msg: '添加友情链接成功' };
        return this.response;
      });
  }

  async findAll(query) {
    const { pageNum, pageSize, ...params } = query;
    if (params.link_name) {
      params.link_name = { $regex: params.link_name, $options: 'i' };
    }
    const data = await this.linkModel
      .find({ ...params, is_delete: false }, { __v: 0, is_delete: 0 })
      .sort('sort')
      .skip(pageNum ? (pageNum - 1) * pageSize : 0)
      .limit(pageSize);
    const total = await this.linkModel.countDocuments({ ...params });
    this.response = {
      code: 200,
      msg: '友情链接列表',
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
    return await this.linkModel
      .findOne({ _id: id })
      .then(async () => {
        const data = await this.linkModel.findOne(
          { _id: id, is_delete: false },
          { __v: 0, createdAt: 0, updatedAt: 0, is_delete: 0 },
        );
        this.response = {
          code: 200,
          msg: '友情链接详情',
          data,
        };
        return this.response;
      })
      .catch(() => {
        return (this.response = {
          code: 500,
          msg: '友情链接不存在',
          data: '',
        });
      });
  }

  async update(_id: string, updateLinkDto: LinkDot) {
    return await this.linkModel
      .findById(_id)
      .then(async () => {
        await this.linkModel.findByIdAndUpdate(_id, updateLinkDto, {});

        Logger.log(`友情链接${updateLinkDto.link_name}修改成功`);
        this.response = {
          code: 200,
          msg: '修改友情链接成功',
          data: '',
        };
        return this.response;
      })
      .catch(() => {
        return (this.response = {
          code: 500,
          msg: '友情链接不存在',
          data: '',
        });
      });
  }

  async remove(_id: string) {
    return await this.linkModel
      .findOne({ _id: _id })
      .then(async () => {
        await this.linkModel.findOneAndUpdate({ _id }, { is_delete: true }, {});
        this.response = {
          code: 200,
          msg: '友情链接删除成功',
          data: '',
        };
        return this.response;
      })
      .catch((err) => {
        Logger.error(err);
        return (this.response = {
          code: 500,
          msg: '友情链接不存在',
          data: '',
        });
      });
  }
}
