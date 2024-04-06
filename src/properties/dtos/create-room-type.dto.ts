import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class CreateRoomTypeDto {
  @ApiProperty({ default: '31437a8e-e301-465a-be0f-c45b4b554a6a' })
  @IsString()
  name: string;

  @ApiProperty({ default: 'Standard' })
  @IsString()
  code: string;

  @ApiProperty({ default: 2 })
  @IsInt()
  @Min(2)
  maxOccupancy: number;

  @ApiProperty({
    required: false,
    default:
      'Ipsum neque consequatur cumque quod dolor repudiandae eos reprehenderit.',
  })
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty({ default: 24 })
  @IsInt()
  @Min(14)
  size: number;

  @ApiProperty({ default: 'sqm' })
  @IsString()
  unit: string;
}
