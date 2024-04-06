import { Column, Entity, OneToMany } from 'typeorm';

import { Block } from '../../blocks/entities/block.entity';
import { Event } from '../../blocks/entities/event.entity';
import { Numeric } from '../../database/columns/numeric.column';
import { BaseEntity } from '../../database/entities/base.entity';
import { RoomType } from './room-type.entity';

@Entity('properties')
export class Property extends BaseEntity {
  @Column('varchar', { length: 255 })
  name: string;

  @Column('varchar', { length: 255, nullable: true })
  description: string;

  @Column('varchar', { length: 55, nullable: true })
  group: string;

  @Column('varchar', { length: 55, nullable: true })
  brand: string;

  @Column('int', { nullable: true })
  roomCount: number;

  @Column('varchar', { length: 5, nullable: true })
  currency: string;

  @Column('varchar', { length: 255, nullable: true })
  userId: string;

  @Column('varchar', { length: 15, nullable: true })
  phoneNumber: string;

  @Column('varchar', { length: 255, nullable: true })
  emailAddress: string;

  @Column('varchar', { length: 255, nullable: true })
  addressLine: string;

  @Numeric({ precision: 2, scale: 1, nullable: true })
  rating: number;

  @Column('varchar', { length: 150, nullable: true })
  hotelier: string;

  @OneToMany(() => RoomType, (roomType) => roomType.property)
  roomTypes: RoomType[];

  @OneToMany(() => Block, (block) => block.property)
  blocks: Block[];

  @OneToMany(() => Event, (event) => event.property)
  events: Event[];
}
