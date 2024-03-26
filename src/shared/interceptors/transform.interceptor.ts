import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TransformResponse } from '../interfaces/transform-response.interface';

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, TransformResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<TransformResponse<T>> {
    return next.handle().pipe(
      map((data) => {
        if (data instanceof Array) {
          return {
            data: { results: data },
          };
        }
        return { data };
      }),
    );
  }
}
