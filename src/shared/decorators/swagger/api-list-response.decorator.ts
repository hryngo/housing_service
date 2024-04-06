import { applyDecorators } from '@nestjs/common';
import {
  ApiExtraModels,
  ApiResponse,
  ApiResponseOptions,
  getSchemaPath,
} from '@nestjs/swagger';

import { ClassConstructor } from '../../interfaces/class-constructor.interface';

export const ApiListResponse = <T extends ClassConstructor>(
  dto: T,
  options?: ApiResponseOptions,
) => {
  const apiResponseOptions = options || {};
  Object.assign(apiResponseOptions, {
    schema: {
      allOf: [
        {
          properties: {
            data: {
              type: 'object',
              properties: {
                results: {
                  type: 'array',
                  items: { $ref: getSchemaPath(dto) },
                },
              },
            },
          },
        },
      ],
    },
  });
  return applyDecorators(ApiExtraModels(dto), ApiResponse(apiResponseOptions));
};
