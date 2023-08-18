import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AdminModule);

  // 开启静态文件托管
  app.useStaticAssets('Uploads', {
    prefix: '/Uploads',
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
