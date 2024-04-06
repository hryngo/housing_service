import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    default: 'The Continental Hotel',
    description: 'Property hotel name',
  })
  name: string;

  @Expose()
  @ApiProperty({
    default: 'The Continental',
    description: 'Property hotel group',
  })
  group: string;

  @Expose()
  @ApiProperty({ description: 'Property hotel brand' })
  brand: string;

  @ApiProperty({
    default: 120,
    description: 'Number of rooms a property hotel can sale',
  })
  @Expose()
  roomCount: number;

  @ApiProperty({ default: 'USD', description: 'Property hotel currency' })
  @Expose()
  currency: string;

  @Expose()
  @ApiProperty({
    default:
      'The Continental is a international chain of luxury hotels that function as neutral territories for members of the criminal underworld.',
    required: false,
    description: 'Property hotel description',
  })
  description: string;

  @ApiProperty({
    default: 'admin@example.com',
    description: 'Email address contact',
  })
  @Expose()
  emailAddress: string;

  @ApiProperty({ required: false, description: 'Phone number contact' })
  @Expose()
  phoneNumber: number;

  @ApiProperty({
    default: ' 1 Wall Street Court, New York City',
    required: false,
    description: 'Address line 2 of a property hotel',
  })
  @Expose()
  addressLine: string;

  @ApiProperty({
    default: 'Winston Scott',
    description: 'Property hotel manager or account holder',
  })
  @Expose()
  hotelier: string;

  @ApiProperty({
    required: false,
    default: 5.0,
    description: 'Property hotel stars',
  })
  @Expose()
  rating: number;

  @ApiProperty()
  @Expose()
  createdAt: Date;

  @ApiProperty()
  @Expose()
  updatedAt: Date;
}
