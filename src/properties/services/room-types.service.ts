import { Inject, Injectable } from '@nestjs/common';
import { CreateRoomTypeListDto } from '../dtos/create-room-type-list.dto';
import { UpdateRoomTypeDto } from '../dtos/update-room-type.dto';
import { CreateRoomTypeCommand } from '../commands/create-room-type.command';
import { CommandBus } from '@nestjs/cqrs';
import { Property } from '../entities/property.entity';
import { RoomType } from '../entities/room-type.entity';
import { ROOM_TYPE_REPOSITORY } from '../constants';
import { Repository } from 'typeorm';

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
    return this.repo.findBy({ property: {id: property.id} });
  }

  findOne(id: number) {
    return `This action returns a #${id} roomType`;
  }

  update(id: number, updateRoomTypeDto: UpdateRoomTypeDto) {
    return `This action updates a #${id} roomType`;
  }

  remove(id: number) {
    return `This action removes a #${id} roomType`;
  }
}
