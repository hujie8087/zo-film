import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UserModule } from './user/user.module';
import { DbModule } from '@libs/db';
import { NewsModule } from './news/news.module';
import { AuthModule } from './auth/auth.module';
import { NewsTypeModule } from './news-type/news-type.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    DbModule,
    UserModule,
    NewsModule,
    AuthModule,
    NewsTypeModule,
    MulterModule.register({
      dest: 'Uploads',
    }),
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
