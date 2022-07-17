import { Module } from '@nestjs/common';
import { AppController } from '@tasker/backend/src/modules/app.controller';
import { AppService } from '@tasker/backend/src/modules/app.service';
import { AppConfigModule } from '@tasker/backend/src/modules/config/app-config.module';
import { DbConfig } from '@tasker/backend/src/modules/config/models/db.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Entities from '@tasker/backend/src/entities';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import { UserModule } from '@tasker/backend/src/modules/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [AppConfigModule],
      inject: [DbConfig],
      useFactory: async (dbConfig: DbConfig): Promise<TypeOrmModuleOptions> => {
        const {
          database,
          password,
          username,
          port,
          host,
          logging,
          synchronize,
          serverEnv: name,
        } = dbConfig;

        return {
          type: 'mysql',
          host,
          port,
          username,
          password,
          database,
          entities: Object.values(Entities),
          name,
          logging,
          synchronize,
          relationLoadStrategy: 'query',
        };
      },
    }),
    AppConfigModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
