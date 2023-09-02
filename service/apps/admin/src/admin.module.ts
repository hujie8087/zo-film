import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UserModule } from './user/user.module';
import { DbModule } from '@libs/db';
import { NewsModule } from './news/news.module';
import { AuthModule } from './auth/auth.module';
import { NewsTypeModule } from './news-type/news-type.module';
import { HomeModule } from './home/home.module';
import { GoodsService } from './goods/goods.service';
import { GoodsController } from './goods/goods.controller';
import { GoodsModule } from './goods/goods.module';
import { GoodsImgModule } from './goods-img/goods-img.module';
import { GoodsVideoModule } from './goods-video/goods-video.module';
import { VideoUploadModule } from './video-upload/video-upload.module';
import { WhyModule } from './why/why.module';
import { MessageService } from './message/message.service';
import { MessageModule } from './message/message.module';
import { RegionModule } from './region/region.module';
import { StoreModule } from './store/store.module';
import { ManageService } from './manage/manage.service';
import { ManageController } from './manage/manage.controller';
import { ManageModule } from './manage/manage.module';
import { TextCModule } from './textc/textc.module';
import { VideoDownModule } from './video-down/video-down.module';
import { DownloadModule } from './download/download.module';
import { ClassifyTypeModule } from './classify-type/classify-type.module';
import { LinkModule } from './link/link.module';
import { TextModule } from './text/text.module';
import { SiteModule } from './site/site.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './auth/strategies/local.strategy';
import { JwtStrategy } from './auth/strategies/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'libs/lib';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }), // 配置默认策略
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    DbModule,
    UserModule,
    NewsModule,
    AuthModule,
    NewsTypeModule,
    HomeModule,
    GoodsModule,
    GoodsImgModule,
    GoodsVideoModule,
    VideoUploadModule,
    WhyModule,
    MessageModule,
    RegionModule,
    StoreModule,
    ManageModule,
    TextCModule,
    VideoDownModule,
    DownloadModule,
    ClassifyTypeModule,
    LinkModule,
    TextModule,
    SiteModule,
  ],
  controllers: [AdminController, GoodsController, ManageController],
  providers: [
    AdminService,
    GoodsService,
    MessageService,
    ManageService,
    LocalStrategy,
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AdminModule {}
