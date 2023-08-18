import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { News } from './models/news.model';
import { User } from './models/user.model';
import { NewsType } from './models/newsType.model';
const models = TypegooseModule.forFeature([News, User, NewsType]);

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost:27017/zo', {}),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
