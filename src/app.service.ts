import { Injectable } from '@nestjs/common';
import * as five from 'johnny-five';

@Injectable()
export class AppService {

  hello(): string {
    return 'Hello';
  }

  initBoard(): string {
    const board = new five.Board();

    board.on('ready', () => {
      console.log('Board ready.');
      const led = new five.Led(13);
      led.blink(1000);
    });

    return 'initBoard';
  }

}
