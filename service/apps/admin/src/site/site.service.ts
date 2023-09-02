import { Site, SiteDot } from '@libs/db/models/site.model';
import { Injectable, Logger } from '@nestjs/common';
import { IResponse } from 'libs/interface/response.interface';
import { Model } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class SiteService {
  constructor(
    @InjectModel(Site)
    private siteCModel: Model<Site>,
  ) {}
  private response: IResponse;

  async create(site: Site) {
    await this.siteCModel
      .find()
      .collation({
        locale: 'zh',
        numericOrdering: true,
      })
      .sort({ site_id: -1 })
      .limit(1)
      .then(async (res) => {
        const site_id = +res[0].site_id + 1 + '';
        const createSite = new this.siteCModel({
          ...site,
          date: (new Date().getTime() / 1000).toFixed(0),
          is_delete: false,
          type_id: '1',
          site_id,
        });
        await createSite.save();
        Logger.log(`站点设置${site.company_name}添加成功`);
        this.response = { code: 200, data: '', msg: '添加站点设置成功' };
        return this.response;
      });
  }

  async findAll(query) {
    const { pageNum, pageSize, ...params } = query;
    if (params.name) {
      params.name = { $regex: params.name, $options: 'i' };
    }
    const data = await this.siteCModel
      .find({ ...params, is_delete: false }, { __v: 0, is_delete: 0 })
      .sort('sort')
      .skip(pageNum ? (pageNum - 1) * pageSize : 0)
      .limit(pageSize);
    const total = await this.siteCModel.countDocuments({ ...params });
    this.response = {
      code: 200,
      msg: '站点设置列表',
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
    return await this.siteCModel
      .findOne({ site_id: id })
      .then(async () => {
        const data = await this.siteCModel.findOne(
          { site_id: id },
          { __v: 0, createdAt: 0, updatedAt: 0 },
        );
        this.response = {
          code: 200,
          msg: '站点设置详情',
          data,
        };
        return this.response;
      })
      .catch(() => {
        return (this.response = {
          code: 500,
          msg: '站点设置不存在',
          data: '',
        });
      });
  }

  async update(_id: string, updateSite: SiteDot) {
    return await this.siteCModel
      .findById(_id)
      .then(async () => {
        await this.siteCModel.findByIdAndUpdate(_id, updateSite, {});

        Logger.log(`站点设置${updateSite.company_name}修改成功`);
        this.response = {
          code: 200,
          msg: '修改站点设置成功',
          data: '',
        };
        return this.response;
      })
      .catch(() => {
        return (this.response = {
          code: 500,
          msg: '站点设置不存在',
          data: '',
        });
      });
  }

  async remove(_id: string) {
    return await this.siteCModel
      .findOne({ _id: _id })
      .then(async () => {
        await this.siteCModel.findOneAndUpdate(
          { _id },
          { is_delete: true },
          {},
        );
        this.response = {
          code: 200,
          msg: '站点设置删除成功',
          data: '',
        };
        return this.response;
      })
      .catch((err) => {
        Logger.error(err);
        return (this.response = {
          code: 500,
          msg: '站点设置不存在',
          data: '',
        });
      });
  }
  async removeMany(ids: string[]) {
    return await this.siteCModel
      .find({ _id: { $in: ids } })
      .then(async () => {
        await this.siteCModel.updateMany(
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
