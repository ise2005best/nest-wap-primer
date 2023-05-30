// This imports all the necessary information into our main.ts to run

import { NestFactory } from '@nestjs/core'; // this creates a nest js application
import { AppModule } from './app.module'; //this imports the app.module into the main.ts

import { NestExpressApplication } from '@nestjs/platform-express'; // this specifies express as our server engine 
import { join } from 'path';

import * as nunjucks from 'nunjucks'; // this imports nunjucks which is a template engine that allows one to render dynamic content

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule); // this creates a nest.js application and passes the app.module as the root module
  const express = app.getHttpAdapter().getInstance(); // the HttpAdapter is responsible for handling http request and response on nest.js application

  const views = join(__dirname, '..', 'views'); // this joins the views folder into our main.ts

  nunjucks.configure(views, { express }); // this uses the item in the views folder and the express constant to be hosted on the nunjucks template engine

  // this incoperates the static folder into our main.ts
  const staticAssets = join(__dirname, '..', 'static');
  app.useStaticAssets(staticAssets); // usestaticassets is a function that lets us imports static files
  await app.listen(3000);
}
bootstrap();
