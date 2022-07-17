import { Module } from '@nestjs/common';
import { UserService } from '@tasker/backend/src/modules/user/services/user.service';
import { UserController } from '@tasker/backend/src/modules/user/user.controller';

@Module({
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
