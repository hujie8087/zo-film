import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express';
import { DbModule } from '@libs/db';
import { NewsModule } from './news/news.module';

@Module({
  imports: [
    DbModule,
    MulterModule.register({
      dest: 'uploads',
    }),
    NewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
