import { Repository } from 'typeorm';
import { User } from '@tasker/backend/src/entities';
import { CustomRepository } from '@tasker/backend/src/modules/typeorm-ex/decorators/typeorm-ex.decorator';

@CustomRepository(User)
export class UserRepository extends Repository<User> {
  // private readonly user: Repository<User>;
  // constructor() {
  //   this.user = new InjectDataSource({
  //     name: 'some',
  //     type: 'mysql',
  //   }).getRepository(User);
  // }
  public findUsers() {
    return this.find();
  }
}
