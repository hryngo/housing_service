import { Expose, Transform } from 'class-transformer';

export class ColumnNumericTransformer {
  to(data: number): number {
    return data;
  }
  from(data: string): number {
    return parseFloat(data);
  }
}

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
