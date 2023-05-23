import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string { // this method returns hello world on the getHello class from app.controller
    return 'Hello World!';
  }
  getHello2(): {}{
    return {message: 'Hello GUYSS, MY NAME IS ISEOLUWAAA !', title: 'My Greeting App'}; //the message property is attached to the h1 tag in the index.html file while the title property is attached to the title tag.
}
  getHome():{}{
  return {title: 'Home Page'};
}
getAboutUs(): {}{
  return {title: 'About us Page'};
}
}

