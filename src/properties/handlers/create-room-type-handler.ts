import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { ROOM_TYPE_REPOSITORY } from '../constants';
import { Repository } from 'typeorm';
import { Property } from '../entities/property.entity';
import { CreateRoomTypeCommand } from '../commands/create-room-type.command';

@CommandHandler(CreateRoomTypeCommand)
export class CreateRoomTypeHandler
  implements ICommandHandler<CreateRoomTypeCommand>
{
  constructor(
    @Inject(ROOM_TYPE_REPOSITORY) private repo: Repository<Property>,
    private publisher: EventPublisher,
  ) {}

  async execute(command: CreateRoomTypeCommand) {
    const roomTypes: any[] = this.repo.create(command.roomTypes);
    roomTypes.map((roomType) => {
      roomType.property = command.property;
      return roomType;
    })
    return this.repo.save(roomTypes);
  }
}
