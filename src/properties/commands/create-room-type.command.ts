import { Property } from '../entities/property.entity';
import { RoomType } from '../interfaces/room-type.interface';

export interface RoomTypeInCommand extends RoomType {}

export class CreateRoomTypeCommand {
  constructor(
    public readonly property: Property,
    public readonly roomTypes: RoomTypeInCommand[],
  ) {}
}
