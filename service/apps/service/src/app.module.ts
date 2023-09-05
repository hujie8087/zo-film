import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express';
import { DbModule } from '@libs/db';
import { NewsModule } from './news/news.module';
import { NewsTypeModule } from './news-type/news-type.module';
import { HomeDataModule } from './home-data/home-data.module';
import { HelpModule } from './help/help.module';
import { WhyService } from './why/why.service';
import { WhyController } from './why/why.controller';
import { WhyModule } from './why/why.module';
import { ContactService } from './contact/contact.service';
import { ContactController } from './contact/contact.controller';
import { ContactModule } from './contact/contact.module';
import { SolutionService } from './solution/solution.service';
import { SolutionController } from './solution/solution.controller';
import { SolutionModule } from './solution/solution.module';
import { SoftwareService } from './software/software.service';
import { SoftwareController } from './software/software.controller';
import { SoftwareModule } from './software/software.module';
import { StoreService } from './store/store.service';
import { StoreController } from './store/store.controller';
import { StoreModule } from './store/store.module';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    DbModule,
    MulterModule.registerAsync({
      useFactory() {
        return {
          dest: 'uploads',
        };
      },
    }),
    NewsModule,
    NewsTypeModule,
    HomeDataModule,
    HelpModule,
    WhyModule,
    ContactModule,
    SolutionModule,
    SoftwareModule,
    StoreModule,
    ProductsModule,
  ],
  controllers: [
    AppController,
    WhyController,
    ContactController,
    SolutionController,
    SoftwareController,
    StoreController,
    ProductsController,
  ],
  providers: [
    AppService,
    WhyService,
    ContactService,
    SolutionService,
    SoftwareService,
    StoreService,
    ProductsService,
  ],
})
export class AppModule {}
