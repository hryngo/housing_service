import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class UpdateRoomTypeDto {
  @ApiProperty({ default: 'Standard' })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({ default: 'STD' })
  @IsString()
  @IsOptional()
  code: string;

  @ApiProperty({ default: 2 })
  @IsInt()
  @Min(2)
  @IsOptional()
  maxOccupancy: number;

  @ApiProperty({
    default:
      'Ipsum neque consequatur cumque quod dolor repudiandae eos reprehenderit.',
  })
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty({ default: 24 })
  @IsInt()
  @Min(14)
  @IsOptional()
  size: number;

  @ApiProperty({ default: 'sqm' })
  @IsString()
  @IsOptional()
  unit: string;
}
