import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import * as fs from 'fs';

async function bootstrap() {
  // const httpsOptions = {
  //   key: fs.readFileSync('./src/cert/cert.key'),
  //   cert: fs.readFileSync('./src/cert/cert.crt'),
  // };

  const app = await NestFactory.create(
    AppModule,
    // { httpsOptions },
  );
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
