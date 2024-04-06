import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

import { Perms } from '../decorators/perms.decorator';

@Injectable()
export class PermsGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredPerms = this.reflector.get(Perms, context.getHandler());
    if (!requiredPerms?.length) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    if (!user) {
      return false;
    }
    return user.hasPerms(...requiredPerms);
  }
}
