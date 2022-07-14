import { PrimaryGeneratedColumn } from 'typeorm';
import { TimestampEntity } from '@tasker/backend/src/entites/utils/timestamp.entity';
import { ApiProperty } from '@nestjs/swagger';
import { DecorateAll } from '@tasker/backend/common/decorators';

@DecorateAll([ApiProperty()])
export class IntTimestampEntity extends TimestampEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'integer' })
  id: number;
}
