import { Controller, Get } from '@nestjs/common';
import { Message } from '@tasker/api-interfaces';
import { AppService } from '@tasker/backend/src/modules/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }
}
