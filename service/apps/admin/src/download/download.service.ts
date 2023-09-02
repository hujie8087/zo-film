import { Download, DownloadDot } from '@libs/db/models/download.model';
import { Injectable, Logger } from '@nestjs/common';
import { IResponse } from 'libs/interface/response.interface';
import { Model } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
@Injectable()
export class DownloadService {
  constructor(
    @InjectModel(Download)
    private downloadModel: Model<Download>,
  ) {}
  private response: IResponse;

  async create(download: Download) {
    await this.downloadModel
      .find()
      .collation({
        locale: 'zh',
        numericOrdering: true,
      })
      .sort({ download_id: -1 })
      .limit(1)
      .then(async (res) => {
        const download_id = +res[0].download_id + 1 + '';
        const createDownload = new this.downloadModel({
          ...download,
          type_id: '43',
          date: (new Date().getTime() / 1000).toFixed(0),
          is_delete: false,
          download_id,
        });
        await createDownload.save();
        Logger.log(`文件上传${download.download_name}添加成功`);
        this.response = { code: 200, data: '', msg: '添加文件上传成功' };
        return this.response;
      });
  }

  async findAll(query) {
    const { pageNum, pageSize, ...params } = query;
    const data = await this.downloadModel
      .find({ ...params, is_delete: false }, { __v: 0, is_delete: 0 })
      .sort('sort')
      .skip(pageNum ? (pageNum - 1) * pageSize : 0)
      .limit(pageSize);
    const total = await this.downloadModel.countDocuments({ ...params });
    this.response = {
      code: 200,
      msg: '文件上传列表',
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
    return await this.downloadModel
      .findOne({ _id: id })
      .then(async () => {
        const data = await this.downloadModel.findOne(
          { _id: id, is_delete: false },
          { __v: 0, createdAt: 0, updatedAt: 0, is_delete: 0 },
        );
        this.response = {
          code: 200,
          msg: '文件上传详情',
          data,
        };
        return this.response;
      })
      .catch(() => {
        return (this.response = {
          code: 500,
          msg: '文件上传不存在',
          data: '',
        });
      });
  }

  async update(_id: string, updateDownloadDto: DownloadDot) {
    return await this.downloadModel
      .findById(_id)
      .then(async () => {
        await this.downloadModel.findByIdAndUpdate(_id, updateDownloadDto, {});

        Logger.log(`文件上传${updateDownloadDto.download_name}修改成功`);
        this.response = {
          code: 200,
          msg: '修改文件上传成功',
          data: '',
        };
        return this.response;
      })
      .catch(() => {
        return (this.response = {
          code: 500,
          msg: '文件上传不存在',
          data: '',
        });
      });
  }

  async remove(_id: string) {
    return await this.downloadModel
      .findOne({ _id: _id })
      .then(async () => {
        await this.downloadModel.findOneAndUpdate(
          { _id },
          { is_delete: true },
          {},
        );
        this.response = {
          code: 200,
          msg: '文件内容删除成功',
          data: '',
        };
        return this.response;
      })
      .catch((err) => {
        Logger.error(err);
        return (this.response = {
          code: 500,
          msg: '文件内容不存在',
          data: '',
        });
      });
  }
}
