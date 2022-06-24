import { Controller, Get, Post } from 'routing-controllers';

@Controller()
export class IndexController {
  @Get('/')
  index() {
    return 'OK';
  }

}
