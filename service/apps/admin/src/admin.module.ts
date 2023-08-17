import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UserModule } from './user/user.module';
import { DbModule } from '@libs/db';
import { NewsController } from './news/news.controller';
import { NewsModule } from './news/news.module';
import { AuthModule } from './auth/auth.module';
import { NewsTypeModule } from './news-type/news-type.module';

@Module({
  imports: [DbModule, UserModule, NewsModule, AuthModule, NewsTypeModule],
  controllers: [AdminController, NewsController],
  providers: [AdminService],
})
export class AdminModule {}
