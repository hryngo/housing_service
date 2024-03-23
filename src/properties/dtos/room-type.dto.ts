import { Expose, Transform } from 'class-transformer';

export class RoomTypeDto {
  @Transform(({ obj }) => obj.guid)
  @Expose()
  id: string;
  
  @Expose()
  name: string;

  @Expose()
  code: string;

  @Expose()
  maxOccupancy: number;

  @Expose()
  description: string;

  @Expose()
  size: number;

  @Expose()
  unit: string;
}
