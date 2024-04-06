import { ApiProperty } from '@nestjs/swagger';

import { TransformResponse } from '../interfaces/transform-response.interface';

export class ResultsResponseDto<T> {
  results: T[];
}

export class ListResponseDto<T> implements TransformResponse<T> {
  @ApiProperty({ type: () => ResultsResponseDto<T> })
  data: ResultsResponseDto<T>;
}
