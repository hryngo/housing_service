import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { Repository } from 'typeorm';

import { CreateRoomTypeCommand } from '../commands/create-room-type.command';
import { ROOM_TYPE_REPOSITORY } from '../constants';
import { CreateRoomTypeListDto } from '../dtos/create-room-type-list.dto';
import { Property } from '../entities/property.entity';
import { RoomType } from '../entities/room-type.entity';

@Injectable()
export class RoomTypesService {
  constructor(
    private commandBus: CommandBus,
    @Inject(ROOM_TYPE_REPOSITORY) private repo: Repository<RoomType>,
  ) {}

  create(property: Property, createRoomTypeListDto: CreateRoomTypeListDto) {
    return this.commandBus.execute(
      new CreateRoomTypeCommand(property, createRoomTypeListDto.roomTypes),
    );
  }

  findByProperty(property: Property) {
    return this.repo.findBy({ property: { id: property.id } });
  }

  async findOneByGuid(guid: string) {
    return this.repo.findOneBy({ guid });
  }

  async update(guid: string, attrs: Partial<RoomType>) {
    const instance = await this.findOneByGuid(guid);
    if (!instance) {
      throw new NotFoundException('Room type not found.');
    }
    Object.assign(instance, attrs);
    return this.repo.save(instance);
  }

  async remove(guid: string) {
    const instance = await this.findOneByGuid(guid);
    if (!instance) {
      throw new NotFoundException('Room type not found.');
    }
    return this.repo.softRemove(instance);
  }
}
