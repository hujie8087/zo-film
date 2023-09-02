import {
  VideoUpload,
  VideoUploadDot,
} from '@libs/db/models/video_upload.model';
import { Injectable, Logger } from '@nestjs/common';
import { IResponse } from 'libs/interface/response.interface';
import { Model } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
@Injectable()
export class VideoUploadService {
  constructor(
    @InjectModel(VideoUpload)
    private videoUploadModel: Model<VideoUpload>,
  ) {}
  private response: IResponse;

  async create(videoUpload: VideoUpload) {
    await this.videoUploadModel
      .find()
      .collation({
        locale: 'zh',
        numericOrdering: true,
      })
      .sort({ video_upload_id: -1 })
      .limit(1)
      .then(async (res) => {
        const video_upload_id = +res[0].video_upload_id + 1 + '';
        const createVideoDown = new this.videoUploadModel({
          ...videoUpload,
          type_id: '72',
          date: (new Date().getTime() / 1000).toFixed(0),
          is_delete: false,
          video_upload_id,
        });
        await createVideoDown.save();
        Logger.log(`视频上传${videoUpload.name}添加成功`);
        this.response = { code: 200, data: '', msg: '添加视频上传成功' };
        return this.response;
      });
  }

  async findAll(query) {
    const { pageNum, pageSize, ...params } = query;
    const data = await this.videoUploadModel
      .find({ ...params, is_delete: false }, { __v: 0, is_delete: 0 })
      .sort('sort')
      .skip(pageNum ? (pageNum - 1) * pageSize : 0)
      .limit(pageSize);
    const total = await this.videoUploadModel.countDocuments({ ...params });
    this.response = {
      code: 200,
      msg: '视频上传列表',
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
    return await this.videoUploadModel
      .findOne({ _id: id })
      .then(async () => {
        const data = await this.videoUploadModel.findOne(
          { _id: id, is_delete: false },
          { __v: 0, createdAt: 0, updatedAt: 0, is_delete: 0 },
        );
        this.response = {
          code: 200,
          msg: '视频上传详情',
          data,
        };
        return this.response;
      })
      .catch(() => {
        return (this.response = {
          code: 500,
          msg: '视频上传不存在',
          data: '',
        });
      });
  }

  async update(_id: string, updateVideoUploadDto: VideoUploadDot) {
    return await this.videoUploadModel
      .findById(_id)
      .then(async () => {
        await this.videoUploadModel.findByIdAndUpdate(
          _id,
          updateVideoUploadDto,
          {},
        );

        Logger.log(`视频上传${updateVideoUploadDto.name}修改成功`);
        this.response = {
          code: 200,
          msg: '修改视频上传成功',
          data: '',
        };
        return this.response;
      })
      .catch(() => {
        return (this.response = {
          code: 500,
          msg: '视频上传不存在',
          data: '',
        });
      });
  }

  async remove(_id: string) {
    return await this.videoUploadModel
      .findOne({ _id: _id })
      .then(async () => {
        await this.videoUploadModel.findOneAndUpdate(
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
}
