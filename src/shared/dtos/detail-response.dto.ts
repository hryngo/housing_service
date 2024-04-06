import { ApiProperty } from '@nestjs/swagger';

import { TransformResponse } from '../interfaces/transform-response.interface';

export class DetailResponseDto<T> implements TransformResponse<T> {
  @ApiProperty()
  data: T;
}
