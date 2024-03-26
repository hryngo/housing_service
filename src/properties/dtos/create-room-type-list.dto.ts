import { Type } from 'class-transformer';
import { ArrayUnique, ValidateNested } from 'class-validator';

import { CreateRoomTypeDto } from './create-room-type.dto';

export class CreateRoomTypeListDto {
  @ValidateNested()
  @ArrayUnique((obj) => obj.code)
  @Type(() => CreateRoomTypeDto)
  roomTypes: CreateRoomTypeDto[];
}
