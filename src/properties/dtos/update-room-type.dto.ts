import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class UpdateRoomTypeDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  code: string;

  @IsInt()
  @Min(2)
  @IsOptional()
  maxOccupancy: number;

  @IsString()
  @IsOptional()
  description: string;

  @IsInt()
  @Min(14)
  @IsOptional()
  size: number;

  @IsString()
  @IsOptional()
  unit: string;
}
