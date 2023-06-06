import { Module } from '@nestjs/common';
// imports app.service and app.controller into our app.module file which is then imported into our main.ts
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm'; // this imports typeORM which makes it easy for us to link our database to our typescript file
import { AppService } from './app.service';
import { StudentRegistrationModule } from './student-registration/student-registration.module'; // this imports the new module created called student registration module which imports both the studentModule and the userModule

@Module({ // the different modules in nest
  imports: [TypeOrmModule.forRoot({ 
    type: "postgres",
    host: "localhost", 
    port: 5433, 
    username: "postgres", 
    password: "postgres", 
    database: "nestwafprimer", 
    entities: [ "dist/**/*.entity{.ts,.js}" ], 
    synchronize: true }),
    StudentRegistrationModule], // allows us to import different modules in nest, we arent importing anything therefore it is empty
  controllers: [AppController], // controllers are responsible for handling http requests and defining the api
  providers: [AppService], // providers are used to implement the business logic of my application. The provider of my application is app.service
})
export class AppModule {} // this exports app.module to main.ts