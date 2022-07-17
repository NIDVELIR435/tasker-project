import { Column, Entity } from 'typeorm';
import { IntTimestampEntity } from '@tasker/backend/src/entities/utils/int-timestamp.entity';
import { DecorateAll } from '@tasker/backend/common/decorators';
import { ApiProperty } from '@nestjs/swagger';

@Entity('user')
@DecorateAll([ApiProperty()])
export class User extends IntTimestampEntity {
  @Column({ name: 'name' })
  name: string;
}
