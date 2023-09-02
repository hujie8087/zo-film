import { Message, MessageDot } from '@libs/db/models/message.model';
import { Injectable } from '@nestjs/common';
import { IResponse } from 'libs/interface/response.interface';
import { Model } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message) private readonly messageModel: Model<Message>,
  ) {}
  private response: IResponse;
  async create(body: Message) {
    await this.messageModel
      .find()
      .collation({
        locale: 'zh',
        numericOrdering: true,
      })
      .sort({ message_id: -1 })
      .limit(1)
      .then(async (res) => {
        const message_id = +res[0].message_id + 1 + '';
        const createMessage = new this.messageModel({
          ...body,
          date: (new Date().getTime() / 1000).toFixed(0),
          is_delete: false,
          message_id,
        });
        await createMessage.save();
        return { code: 200, data: '', msg: '留言成功' };
      });
  }
  async findAll(query) {
    const { pageNum, pageSize, ...params } = query;
    const data = await this.messageModel
      .find({ ...params, is_delete: false }, { __v: 0, is_delete: 0 })
      .sort('date')
      .skip(pageNum ? (pageNum - 1) * pageSize : 0)
      .limit(pageSize);
    const total = await this.messageModel.countDocuments({
      ...params,
      is_delete: false,
    });
    this.response = {
      code: 200,
      msg: '列表',
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
    return await this.messageModel
      .findOne({ _id: id })
      .then(async () => {
        const data = await this.messageModel.findOne(
          { _id: id },
          { __v: 0, createdAt: 0, updatedAt: 0, is_delete: 0 },
        );
        this.response = {
          code: 200,
          msg: '留言详情',
          data,
        };
        return this.response;
      })
      .catch(() => {
        this.response = {
          code: 500,
          msg: '留言详情失败',
          data: '',
        };
        return this.response;
      });
  }
  async update(id: string, body: MessageDot) {
    return await this.messageModel
      .updateOne({ _id: id }, body)
      .then(() => {
        this.response = {
          code: 200,
          msg: '留言修改成功',
          data: '',
        };
        return this.response;
      })
      .catch(() => {
        this.response = {
          code: 500,
          msg: '留言修改失败',
          data: '',
        };
        return this.response;
      });
  }
  async remove(id: string) {
    return await this.messageModel
      .findOne({ _id: id })
      .then(async () => {
        await this.messageModel.findOneAndUpdate(
          { _id: id },
          { is_delete: true },
          {},
        );
        this.response = {
          code: 200,
          msg: '留言删除成功',
          data: '',
        };
        return this.response;
      })
      .catch((err) => {
        return (this.response = {
          code: 500,
          msg: '留言不存在' + err.message,
          data: '',
        });
      });
  }

  async removeMany(ids: string[]) {
    return await this.messageModel
      .find({ _id: { $in: ids } })
      .then(async () => {
        await this.messageModel.updateMany(
          { _id: { $in: ids } },
          { is_delete: true },
          {},
        );
        this.response = {
          code: 200,
          msg: '留言批量删除成功',
          data: '',
        };
        return this.response;
      })
      .catch((err) => {
        return (this.response = {
          code: 500,
          msg: '留言不存在' + err.message,
          data: '',
        });
      });
  }
}
