import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as session from 'express-session';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AdminModule);

  app.use(session({ secret: 'zo-film', rolling: true, name: 'My.sid' }));
  // 开启静态文件托管

  app.useStaticAssets(join(__dirname, '../../../Uploads'), {
    prefix: '/uploads',
  });
  const options = new DocumentBuilder()
    .setTitle('管理后台接口')
    .setDescription('供前管理后台使用的服务端接口')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-admin', app, document);
  await app.listen(3200);
  console.log('http://localhost:3200/api-admin');
}
bootstrap();
