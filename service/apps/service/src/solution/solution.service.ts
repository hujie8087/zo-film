import { Classify } from '@libs/db/models/classify.model';
import { Text } from '@libs/db/models/text.model';
import { TextC } from '@libs/db/models/text_c.model';
import { VideoUpload } from '@libs/db/models/video_upload.model';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class SolutionService {
  constructor(
    @InjectModel(Classify) private readonly classifyModel: Model<Classify>,
    @InjectModel(VideoUpload)
    private readonly videoUploadModel: Model<VideoUpload>,
    @InjectModel(Text)
    private readonly textModel: Model<Text>,
    @InjectModel(TextC)
    private readonly textCModel: Model<TextC>,
  ) {}
  async findSolution() {
    const data = await this.classifyModel.findOne(
      { classify_id: '9', is_delete: false },
      { __v: 0, is_delete: 0 },
    );
    const video = await this.classifyModel.findOne({ classify_id: '96' });
    const videoList = await this.videoUploadModel.find({
      pid: video.classify_id,
    });
    const children = await this.classifyModel.find(
      { classify_id: { $in: ['57', '149'] }, is_delete: false },
      { __v: 0, is_delete: 0 },
    );
    return {
      ...data._doc,
      children,
      video: {
        ...video._doc,
        children: videoList,
      },
    };
  }
  async findTrain() {
    const data = await this.classifyModel.findOne(
      { classify_id: '57', is_delete: false },
      { __v: 0, is_delete: 0 },
    );
    const child = await this.classifyModel.find(
      { classify_pid: '57', is_delete: false },
      { __v: 0, is_delete: 0 },
    );
    const children = await Promise.all(
      child.map(async (item) => {
        const data = await this.textModel.find(
          { classify_id: item.classify_id, is_delete: false },
          { __v: 0, is_delete: 0 },
        );
        return {
          ...item._doc,
          children: data,
        };
      }),
    );
    return {
      ...data._doc,
      children,
    };
  }
  async findInstaller() {
    const data = await this.classifyModel.findOne(
      { classify_id: '149', is_delete: false },
      { __v: 0, is_delete: 0 },
    );
    const child = await this.classifyModel.find(
      { classify_pid: '149', is_delete: false },
      { __v: 0, is_delete: 0 },
    );
    const children = await Promise.all(
      child.map(async (item) => {
        let list = [];
        if (item.type_id === '65') {
          list = await this.textCModel.find(
            { classify_id: item.classify_id, is_delete: false },
            { __v: 0, is_delete: 0 },
          );
        } else if (item.type_id === '72') {
          list = await this.videoUploadModel.find(
            { pid: item.classify_id, is_delete: false },
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
