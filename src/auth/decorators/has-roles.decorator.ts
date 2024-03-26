import { applyDecorators, UseGuards } from '@nestjs/common';

import { RolesGuard } from '../guards/roles.guard';
import { Roles } from './roles.decorator';

export function HasRoles(...roles: string[]) {
  return applyDecorators(Roles(roles), UseGuards(RolesGuard));
}
