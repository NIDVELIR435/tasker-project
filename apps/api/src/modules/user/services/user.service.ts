import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from '@tasker/backend/src/entities';

@Injectable()
export class UserService {
  private readonly user: Repository<User>;
  constructor(private dataSource: DataSource) {
    this.user = dataSource.getRepository(User);
  }

  public findUsers() {
    return this.user.find({ select: { name: true, id: true } });
  }

  public createUser(body: User) {
    const user = this.user.create({ name: body.name });
    return this.user.save(user);
  }
}
