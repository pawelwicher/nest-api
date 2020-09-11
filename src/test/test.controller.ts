import { Controller, Get } from '@nestjs/common';

@Controller('test')
export class TestController {

  @Get()
  getAll(): number[] {
    return [1, 2, 3];
  }

}
