import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return JSON.stringify({
      title: 'Hello World!'
    });
  }
}
