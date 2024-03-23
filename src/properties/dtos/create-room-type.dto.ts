import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class CreateRoomTypeDto {
  @IsString()
  name: string;

  @IsString()
  code: string;

  @IsInt()
  @Min(2)
  maxOccupancy: number;

  @IsString()
  @IsOptional()
  description: string;

  @IsInt()
  @Min(14)
  size: number;

  @IsString()
  unit: string;
}
