import { Type } from 'class-transformer';
import { CreateRoomTypeDto } from './create-room-type.dto';
import { ValidateNested } from 'class-validator';

export class CreateRoomTypeListDto {
  @ValidateNested()
  @Type(() => CreateRoomTypeDto)
  roomTypes: CreateRoomTypeDto[];
}
