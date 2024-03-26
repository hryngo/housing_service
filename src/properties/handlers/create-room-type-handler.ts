import { BadRequestException, Inject } from '@nestjs/common';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Any, Repository } from 'typeorm';

import { CreateRoomTypeCommand } from '../commands/create-room-type.command';
import { ROOM_TYPE_REPOSITORY } from '../constants';
import { RoomType } from '../entities/room-type.entity';

@CommandHandler(CreateRoomTypeCommand)
export class CreateRoomTypeHandler
  implements ICommandHandler<CreateRoomTypeCommand>
{
  constructor(
    @Inject(ROOM_TYPE_REPOSITORY) private repo: Repository<RoomType>,
    private publisher: EventPublisher,
  ) {}

  async execute(command: CreateRoomTypeCommand) {
    if (
      await this.repo.existsBy({
        property: {
          id: command.property.id,
        },
        code: Any(command.roomTypes.map((e) => e.code)),
      })
    ) {
      throw new BadRequestException('The code has already been taken.');
    }
    const roomTypes: any[] = this.repo.create(command.roomTypes);
    roomTypes.map((roomType) => {
      roomType.property = command.property;
      return roomType;
    });
    return this.repo.save(roomTypes);
  }
}
