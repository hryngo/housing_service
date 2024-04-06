import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';

export class RoomTypeDto {
  @ApiProperty({ default: '31437a8e-e301-465a-be0f-c45b4b554a6a' })
  @Transform(({ obj }) => obj.guid)
  @Expose()
  id: string;

  @ApiProperty({ default: 'Standard' })
  @Expose()
  name: string;

  @ApiProperty({ default: 'STD' })
  @Expose()
  code: string;

  @ApiProperty({ default: 2 })
  @Expose()
  maxOccupancy: number;

  @ApiProperty({
    default:
      'Ipsum neque consequatur cumque quod dolor repudiandae eos reprehenderit.',
  })
  @Expose()
  description: string;

  @ApiProperty({ default: 24 })
  @Expose()
  size: number;

  @ApiProperty({ default: 'sqm' })
  @Expose()
  unit: string;
}
