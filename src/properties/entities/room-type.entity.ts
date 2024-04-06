import { Column, Entity, Index, ManyToOne } from 'typeorm';

import { BaseEntity } from '../../database/entities/base.entity';
import { Property } from './property.entity';

@Entity('room_types')
@Index(['code', 'property'], { unique: true })
export class RoomType extends BaseEntity {
  @Column('varchar', { length: 255 })
  name: string;

  @Column('varchar', { length: 255, nullable: true })
  description: string;

  @Column('varchar', { length: 55 })
  code: string;

  @Column('int', { nullable: true })
  maxOccupancy: number;

  @Column('int', { nullable: true })
  size: number;

  @Column('varchar', { length: 10, nullable: true })
  unit: string;

  @ManyToOne(() => Property, (property) => property.roomTypes)
  property: Property;
}
