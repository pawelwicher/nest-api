import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Test Controller')
@Controller('test')
export class TestController {

  @Get()
  getAll(): number[] {
    return [1, 2, 3];
  }

}
