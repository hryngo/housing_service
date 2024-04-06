import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ArrayUnique, ValidateNested } from 'class-validator';

import { CreateRoomTypeDto } from './create-room-type.dto';

export class CreateRoomTypeListDto {
  @ApiProperty({
    type: () => [CreateRoomTypeDto],
    description: 'The room type list input.',
  })
  @ValidateNested()
  @ArrayUnique((obj) => obj.code)
  @Type(() => CreateRoomTypeDto)
  roomTypes: CreateRoomTypeDto[];
}
