import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '@tasker/backend/src/modules/user/services/user.service';
import { ApiSwagger } from '@tasker/backend/common/decorators';
import { StatusCodes } from 'http-status-codes';
import { User } from '@tasker/backend/src/entities';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiSwagger({
    apiOperation: {
      summary: 'find all users in db',
    },
    apiResponses: {
      [StatusCodes.OK]: {
        type: User,
        isArray: true,
      },
    },
  })
  findUsers() {
    return this.userService.findUsers();
  }

  @Post('create')
  @ApiSwagger({
    apiOperation: {
      summary: 'find all users in db',
    },
    apiResponses: {
      [StatusCodes.OK]: {
        type: User,
        isArray: true,
      },
    },
  })
  createUser(@Body() body: User) {
    return this.userService.createUser(body);
  }
}
