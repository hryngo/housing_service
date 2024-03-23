import { APP_INTERCEPTOR } from "@nestjs/core";
import { TransformInterceptor } from "./interceptors/transform.interceptor";

export const sharedProviders = [
  {
    provide: APP_INTERCEPTOR,
    useClass: TransformInterceptor,
  }
]