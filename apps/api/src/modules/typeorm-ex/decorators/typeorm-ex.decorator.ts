import { SetMetadata } from '@nestjs/common';
import { CUSTOM_REPOSITORY } from '@tasker/backend/src/modules/typeorm-ex/constants/typeorm-ex.constant';

export function CustomRepository<Entity>(entity: Entity): ClassDecorator {
  return SetMetadata(CUSTOM_REPOSITORY, entity);
}
