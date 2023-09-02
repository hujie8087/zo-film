import { Classify } from '@libs/db/models/classify.model';
import { Message } from '@libs/db/models/message.model';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel(Classify) private readonly classifyModel: Model<Classify>,
    @InjectModel(Message) private readonly messageModel: Model<Message>,
  ) {}
  async findContactInfo() {
    return this.classifyModel.findOne(
      { classify_id: '11', is_delete: false },
      { __v: 0, is_delete: 0 },
    );
  }
  async postMessage(data: Message) {
    return await this.messageModel
      .find()
      .collation({
        locale: 'zh',
        numericOrdering: true,
      })
      .sort({ message_id: -1 })
      .limit(1)
      .then(async (res) => {
        const message_id = +res[0].message_id + 1 + '';
        const createText = new this.messageModel({
          ...data,
          date: (new Date().getTime() / 1000).toFixed(0),
          is_delete: false,
          type_id: '11',
          message_id,
        });
        await createText.save();
        return {
          code: 200,
          msg: '留言成功',
        };
      });
  }
}
