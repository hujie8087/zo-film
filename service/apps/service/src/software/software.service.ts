import { Classify } from '@libs/db/models/classify.model';
import { TextC } from '@libs/db/models/text_c.model';
import { VideoDown } from '@libs/db/models/video_down.model';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class SoftwareService {
  constructor(
    @InjectModel(Classify) private readonly classifyModel: Model<Classify>,
    @InjectModel(VideoDown) private readonly videoDownModel: Model<VideoDown>,
    @InjectModel(TextC) private readonly textCModel: Model<TextC>,
  ) {}
  async findSoftware() {
    const data = await this.classifyModel.findOne(
      { classify_id: '47', is_delete: false },
      { __v: 0, is_delete: 0 },
    );
    const child = await this.classifyModel.find(
      { classify_pid: '47', is_delete: false },
      { __v: 0, is_delete: 0 },
    );
    const children = await Promise.all(
      child.map(async (item) => {
        let list = [];
        if (item.type_id === '68') {
          list = await this.videoDownModel.find(
            { classify_id: item.classify_id, is_delete: false },
            { __v: 0, is_delete: 0 },
          );
        } else if (item.type_id === '65') {
          list = await this.textCModel.find(
            { classify_id: item.classify_id, is_delete: false },
            { __v: 0, is_delete: 0 },
          );
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
