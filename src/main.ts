import { NestApplicationOptions } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import * as fs from 'fs';
import { join } from 'path';

import { AppModule } from './app.module';
import { SwaggerDocument } from './config/constants';

async function bootstrap() {
  const requiresSSL = false;
  const appOptions: NestApplicationOptions = {};
  if (requiresSSL) {
    appOptions.httpsOptions = {
      key: fs.readFileSync('./src/cert/cert.key'),
      cert: fs.readFileSync('./src/cert/cert.crt'),
    };
  }

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    appOptions,
  );

  const swaggerConfig = new DocumentBuilder()
    .setTitle(SwaggerDocument.Title)
    .setDescription(SwaggerDocument.Description)
    .setVersion(SwaggerDocument.Version)
    // .addTag(SwaggerDocument.Tag)
    .build();
  const swaggerOptions: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };
  const document = SwaggerModule.createDocument(
    app,
    swaggerConfig,
    swaggerOptions,
  );
  SwaggerModule.setup('api', app, document);

  app.setGlobalPrefix('api/v1');
  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
    prefix: '/public/',
  });
  app.setViewEngine({
    engine: {
      handlebars: require('handlebars'),
    },
    templates: join(__dirname, '..', 'views'),
  });
  await app.listen(3000);
}
bootstrap();
