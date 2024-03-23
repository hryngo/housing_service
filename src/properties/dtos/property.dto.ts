import { Expose, Transform } from 'class-transformer';

export class PropertyDto {
  @Transform(({ obj }) => obj.guid)
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  group: string;

  @Expose()
  brand: string;

  @Expose()
  description: string;

  @Expose()
  emailAddress: string;

  @Expose()
  phoneNumber: number;

  @Expose()
  hotelier: string;

  @Expose()
  rating: number;
}
