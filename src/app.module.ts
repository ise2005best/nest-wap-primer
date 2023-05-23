import { Module } from '@nestjs/common';
// imports app.service and app.controller into our app.module file which is then imported into our main.ts
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({ // the different modules in nest
  imports: [], // allows us to import different modules in nest, we arent importing anything therefore it is empty
  controllers: [AppController], // controllers are responsible for handling http requests and defining the api
  providers: [AppService], // providers are used to implement the business logic of my application. The provider of my application is app.service
})
export class AppModule {} // this exports app.module to main.ts