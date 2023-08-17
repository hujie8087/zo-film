import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express';
import { DbModule } from '@libs/db';
import { NewsModule } from './news/news.module';
import { NewsTypeController } from './news-type/news-type.controller';
import { NewsTypeModule } from './news-type/news-type.module';

@Module({
  imports: [
    DbModule,
    MulterModule.register({
      dest: 'uploads',
    }),
    NewsModule,
    NewsTypeModule,
  ],
  controllers: [AppController, NewsTypeController],
  providers: [AppService],
})
export class AppModule {}
