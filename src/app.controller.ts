import { Controller, Get, Render } from '@nestjs/common'; // imports the decorators being used and controller, get and render are the controllers being used
import { AppService } from './app.service'; // imports app.serivce into app.controller

@Controller() // A controller defines a set of route that handles http requests e.g GET, PUT, POST, DELETE
export class AppController {
  constructor(private readonly appService: AppService) {}
/*
  @Get() // this is a get requests at the root URL 
  getHello(): string { // when a get request is made the getHello is invoked
    return this.appService.getHello();
  }*/
  @Get('hello2') // a get request at the /hello2 URL page
  @Render('index.html') // when the get request is made it renders the index.html file
  getHello2(): {} {
     return this.appService.getHello2(); }

  @Get()
  @Render('home.html')
  getHome():{}{
    return this.appService.getHome();
  }
  @Get('about-us')
  @Render('about-us.html')
  getAboutUs():{}{
    return this.appService.getAboutUs();
  }
}
