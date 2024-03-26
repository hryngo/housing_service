import { Column, Entity, OneToMany } from 'typeorm';

import { Numeric } from '../../database/columns/numeric.column';
import { BaseEntity } from '../../database/entities/base.entity';
import { RoomType } from './room-type.entity';

@Entity({ name: 'properties' })
export class Property extends BaseEntity {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 55, nullable: true })
  group: string;

  @Column({ type: 'varchar', length: 55, nullable: true })
  brand: string;

  @Column({ type: 'int', nullable: true })
  roomCount: number;

  @Column({ type: 'varchar', length: 15, nullable: true })
  phoneNumber: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  emailAddress: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  addressLine: string;

  @Numeric({ precision: 2, scale: 1, nullable: true })
  rating: number;

  @Column({ type: 'varchar', length: 150, nullable: true })
  hotelier: string;

  @OneToMany(() => RoomType, (roomType) => roomType.property)
  roomTypes: RoomType[];
}
