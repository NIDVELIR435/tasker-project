import { Module } from '@nestjs/common';
import { AppConfigService } from '@tasker/backend/src/modules/config/app.config.service';
import { DbConfig } from '@tasker/backend/src/modules/config/models/db.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [DbConfig, AppConfigService],
  exports: [DbConfig, AppConfigService],
})
export class AppConfigModule {}
