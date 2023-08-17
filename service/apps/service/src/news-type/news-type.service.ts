import { NewsType } from '@libs/db/models/newsType.model';
import { Injectable } from '@nestjs/common';
import { IResponse } from 'libs/interface/response.interface';
import { Model } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class NewsTypeService {
  constructor(@InjectModel(NewsType) private newsModel: Model<NewsType>) {}
  private response: IResponse;
  async findNewsMenu(): Promise<any> {
    const data = (await this.newsModel.find({ is_delete: false })).map(
      (item) => {
        return {
          _id: item._id,
          title: item.title,
          path: item.url,
        };
      },
    );
    this.response = {
      code: 200,
      msg: 'ok',
      data,
    };
    return this.response;
  }
}
