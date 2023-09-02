import { Model } from 'mongoose';
import { Why } from '@libs/db/models/why.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Classify } from '@libs/db/models/classify.model';
import { VideoUpload } from '@libs/db/models/video_upload.model';

@Injectable()
export class WhyService {
  constructor(
    @InjectModel(Why) private readonly whyModel: Model<Why>,
    @InjectModel(Classify) private readonly classifyModel: Model<Classify>,
    @InjectModel(VideoUpload)
    private readonly videoUploadModel: Model<VideoUpload>,
  ) {}
  async findInfo() {
    const data = await this.classifyModel.findOne(
      { classify_id: '6', is_delete: false },
      { __v: 0, is_delete: 0 },
    );
    const child = await this.classifyModel
      .find({ classify_pid: '23', is_delete: false }, { __v: 0, is_delete: 0 })
      .sort('sort');
    const children = await Promise.all(
      child.map(async (item) => {
        let list = [];
        if (item.type_id === '73') {
          list = await this.whyModel
            .find(
              { classify_id: item.classify_id, is_delete: false },
              { __v: 0, is_delete: 0 },
            )
            .sort('sort');
        } else if (item.type_id === '72') {
          list = await this.videoUploadModel
            .find(
              { pid: item.classify_id, is_delete: false },
              { __v: 0, is_delete: 0 },
            )
            .sort('sort');
        }
        return {
          ...item._doc,
          children: list,
        };
      }),
    );
    return {
      ...data._doc,
      children,
    };
  }
}
