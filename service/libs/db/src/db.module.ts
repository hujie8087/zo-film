import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { News } from './models/news.model';

const models = TypegooseModule.forFeature([News]);

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost:27017/zo-film', {}),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
