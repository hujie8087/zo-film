import { NewsType } from '@libs/db/models/newsType.model';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IResponse } from 'libs/interface/response.interface';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Crud({
  model: NewsType,
})
@ApiTags('新闻类型')
@Controller('news-type')
export class NewsTypeController {
  constructor(@InjectModel(NewsType) private readonly model) {}

  private response: IResponse;
  @Get('menu')
  async getNewsMenu() {
    const data = (
      await this.model.find({ is_delete: false, type_id: '0' }).sort('sort')
    ).map((item) => {
      return {
        _id: item._id,
        title: item.title,
        path: item.url,
      };
    });
    this.response = {
      code: 200,
      msg: 'ok',
      data,
    };
    return this.response;
  }
}
