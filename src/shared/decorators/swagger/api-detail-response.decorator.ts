import { applyDecorators } from '@nestjs/common';
import {
  ApiExtraModels,
  ApiResponse,
  ApiResponseOptions,
  getSchemaPath,
} from '@nestjs/swagger';

import { ClassConstructor } from '../../interfaces/class-constructor.interface';

export const ApiDetailResponse = <T extends ClassConstructor>(
  dto: T,
  options?: ApiResponseOptions,
) => {
  const apiResponseOptions = options || {};
  Object.assign(apiResponseOptions, {
    schema: {
      properties: {
        data: { $ref: getSchemaPath(dto) },
      },
    },
  });
  return applyDecorators(ApiExtraModels(dto), ApiResponse(apiResponseOptions));
};
