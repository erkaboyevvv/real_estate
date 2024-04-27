import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3001;
  app.setGlobalPrefix('api');
  await app.listen(PORT , ()=>{
    console.log(`Server started at: http://localhost:${PORT}/api/main`);
  });
}
start();
