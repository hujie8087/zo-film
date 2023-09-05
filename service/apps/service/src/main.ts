import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 允许跨域
  app.enableCors();
  // 开启静态文件托管
  app.useStaticAssets(join(__dirname, '../../../Uploads'), {
    prefix: '/uploads',
  });
  const options = new DocumentBuilder()
    .setTitle('前端页面接口')
    .setDescription('供前端页面使用的服务端接口')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-front', app, document);
  await app.listen(3100);
  console.log('http://localhost:3100/api-front');
}
bootstrap();
