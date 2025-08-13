import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

let server: any; // cache server instance to avoid re-bootstrapping every request

export default async function handler(req: any, res: any) {
  if (!server) {
    const app = await NestFactory.create(AppModule);
    app.enableCors(); // Allow cross-origin requests if needed
    await app.init();
    server = app.getHttpAdapter().getInstance();
  }
  return server(req, res);
}
