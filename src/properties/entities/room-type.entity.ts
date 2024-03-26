import { Column, Entity, Index, ManyToOne } from 'typeorm';

import { BaseEntity } from '../../database/entities/base.entity';
import { Property } from './property.entity';

@Entity({ name: 'room_types' })
@Index(['code', 'property'], { unique: true })
export class RoomType extends BaseEntity {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 55 })
  code: string;

  @Column({ type: 'int', nullable: true })
  maxOccupancy: number;

  @Column({ type: 'int', nullable: true })
  size: number;

  @Column({ type: 'varchar', length: 10, nullable: true })
  unit: string;

  @ManyToOne(() => Property, (property) => property.roomTypes)
  property: Property;
}
