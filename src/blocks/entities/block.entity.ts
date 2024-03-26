import { Entity } from 'typeorm';

import { BaseEntity } from '../../database/entities/base.entity';

@Entity({ name: 'blocks' })
export class Block extends BaseEntity {

}