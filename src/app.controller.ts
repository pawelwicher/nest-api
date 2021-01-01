import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('App Controller')
@Controller()
export class AppController {

  constructor(
    private readonly appService: AppService) { }

  @Get()
  hello(): string {
    return this.appService.hello();
  }

  @Get('init')
  init(): string {
    return this.appService.initBoard();
  }

}
