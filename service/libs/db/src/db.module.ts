import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { News } from './models/news.model';
import { User } from './models/user.model';
import { NewsType } from './models/newsType.model';
import { Banner } from './models/banner.model';
import { Count } from './models/count.model';
import { Classify } from './models/classify.model';
import { Good } from './models/good.model';
import { GoodsImg } from './models/goods_img.model';
import { GoodsVideo } from './models/goods_video.model';
import { VideoUpload } from './models/video_upload.model';
import { Why } from './models/why.model';
import { Message } from './models/message.model';
import { Region } from './models/region.model';
import { Store } from './models/store.model';
import { Manage } from './models/manage.model';
import { TextC } from './models/text_c.model';
import { VideoDown } from './models/video_down.model';
import { Download } from './models/download.model';
import { ClassifyType } from './models/classify_type.model';
import { Link } from './models/link.model';
import { Text } from './models/text.model';
import { Site } from './models/site.model';

const models = TypegooseModule.forFeature([
  News,
  User,
  NewsType,
  Banner,
  Count,
  Classify,
  Good,
  GoodsImg,
  GoodsVideo,
  VideoUpload,
  Why,
  Message,
  Region,
  Store,
  Manage,
  TextC,
  VideoDown,
  Download,
  ClassifyType,
  Link,
  Text,
  Site,
]);

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot(
      'mongodb://zofilm:zofilm2023@119.28.7.148:27017/zofilm',
      {},
    ),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
