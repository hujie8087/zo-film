import { Region, RegionDot } from '@libs/db/models/region.model';
import { Injectable } from '@nestjs/common';
import { IResponse } from 'libs/interface/response.interface';
import { Model } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class RegionService {
  constructor(@InjectModel(Region) private regionModel: Model<Region>) {}
  private response: IResponse;

  async createRegion(Region: Region) {
    await this.regionModel
      .find()
      .collation({ locale: 'zh', numericOrdering: true })
      .sort({ region_id: -1 })
      .limit(1)
      .then(async (res) => {
        const createRegion = new this.regionModel({
          ...Region,
          region_id: +res[0].region_id + 1 + '',
        });
        await createRegion.save();
        this.response = { code: 200, data: '', msg: '添加地区成功' };
        return this.response;
      });
  }
  async updateRegion(Region: RegionDot) {
    await this.regionModel.updateOne({ _id: Region._id }, Region);
    this.response = { code: 200, data: '', msg: '修改地区成功' };
    return this.response;
  }
  async deleteRegion(id: string) {
    await this.regionModel.findOneAndDelete({ _id: id });
    this.response = { code: 200, data: '', msg: '删除地区成功' };
    return this.response;
  }
  async getRegionById(id: string) {
    const data = await this.regionModel.findOne({ Region_id: id });
    if (data) {
      this.response = { code: 200, data, msg: '获取首页内页图片成功' };
      return this.response;
    } else {
      this.response = { code: 400, data: '', msg: '获取首页内页图片失败' };
      return this.response;
    }
  }

  async getRegionTree(pid: string) {
    // 查找一级分类region_pid为1和2的数据
    const data = await this.regionModel.find({ region_pid: pid });
    // 查找二级分类region_pid为1和2的数据
    const result = await Promise.all(
      data.map(async (item) => {
        const children = await this.regionModel.find({
          region_pid: item.region_id,
        });
        return {
          ...item._doc,
          children,
        };
      }),
    );

    this.response = {
      code: 200,
      msg: '分类列表',
      data: {
        list: result,
      },
    };
    return this.response;
  }
  async getRegionData(pid: string) {
    const data = await this.regionModel.find({ region_pid: pid });
    this.response = {
      code: 200,
      msg: '列表',
      data,
    };
    return this.response;
  }
}
