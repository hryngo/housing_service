import { Expose } from 'class-transformer';
import { IsEmail, IsString, IsNumber, IsOptional } from 'class-validator';

export class RegisterPropertyDto {
  @IsString()
  id: string

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  group: string;

  @IsString()
  brand: string;

  @IsString()
  @IsOptional()
  phoneNumber: string;

  @IsEmail()
  emailAddress: string;

  @IsString()
  @IsOptional()
  addressLine: string;

  @IsNumber()
  @IsOptional()
  rating: number;

  @IsString()
  hotelier: string;
}
