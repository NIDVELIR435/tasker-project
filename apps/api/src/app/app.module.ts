import { Module } from '@nestjs/common';
import {AppController} from "@tasker/backend/src/app/app.controller";
import {AppService} from "@tasker/backend/src/app/app.service";


@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
