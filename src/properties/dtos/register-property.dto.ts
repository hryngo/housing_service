import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class RegisterPropertyDto {
  @ApiProperty({
    default: 'The Continental Hotel',
    description: 'Property hotel name',
  })
  @IsString()
  name: string;

  @ApiProperty({
    default:
      'The Continental is a international chain of luxury hotels that function as neutral territories for members of the criminal underworld.',
    required: false,
    description: 'Property hotel description',
  })
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty({
    default: 'The Continental',
    description: 'Property hotel group',
  })
  @IsString()
  group: string;

  @ApiProperty({ description: 'Property hotel brand' })
  @IsString()
  brand: string;

  @ApiProperty({
    default: 120,
    description: 'Number of rooms a property hotel can sale',
  })
  @IsInt()
  @IsPositive()
  roomCount: number;

  @ApiProperty({ default: 'USD', description: 'Property hotel currency' })
  @IsString()
  currency: string;

  @ApiProperty({ required: false, description: 'Phone number contact' })
  @IsString()
  @IsOptional()
  phoneNumber: string;

  @IsEmail()
  @ApiProperty({
    default: 'admin@example.com',
    description: 'Email address contact',
  })
  emailAddress: string;

  @ApiProperty({
    default: ' 1 Wall Street Court, New York City',
    required: false,
    description: 'Address line 2 of a property hotel',
  })
  @IsString()
  @IsOptional()
  addressLine: string;

  @ApiProperty({
    required: false,
    default: 5.0,
    description: 'Property hotel stars',
  })
  @IsNumber()
  @IsOptional()
  rating: number;

  @ApiProperty({
    default: 'Winston Scott',
    description: 'Property hotel manager or account holder',
  })
  @IsString()
  hotelier: string;
}
