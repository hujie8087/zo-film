import { CreateUserDto, User } from '@libs/db/models/user.model';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
import { cryptoString } from '../../../../libs/lib';
import { IResponse } from 'libs/interface/response.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private readonly userModel: Model<User>) {}
  private response: IResponse;
  async find(): Promise<User[]> {
    return await this.userModel.find();
  }

  async create(createUserDto: CreateUserDto): Promise<any> {
    const { username, password } = createUserDto;
    createUserDto.password = cryptoString(password);
    const isExist = await this.findOneByName(username);
    if (isExist) {
      return {
        statusCode: 202,
        message: '已存在',
      };
    }
    const createUser = new this.userModel(createUserDto);
    return await createUser.save();
  }

  async findOneByName(username: string): Promise<any> {
    return this.userModel.findOne({
      username,
    });
  }
  // 修改用户密码
  async updatePassword(
    username: string,
    oldPassword: string,
    newPassword: string,
  ): Promise<any> {
    return this.findOneByName(username).then(async (res) => {
      if (res.password === cryptoString(oldPassword)) {
        // 密码正确
        await this.userModel
          .updateOne({ username }, { password: cryptoString(newPassword) })
          .then(() => {
            this.response = {
              code: 200,
              data: '',
              msg: '密码修改成功',
            };
          });
      } else {
        // 密码错误
        this.response = {
          code: 202,
          data: '',
          msg: '旧密码不正确成功',
        };
      }
      return this.response;
    });
  }
}
