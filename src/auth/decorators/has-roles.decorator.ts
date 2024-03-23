import { UseGuards, applyDecorators } from '@nestjs/common';
import { Roles } from './roles.decorator';
import { RolesGuard } from '../guards/roles.guard';

export function HasRoles(...roles: string[]) {
  return applyDecorators(Roles(roles), UseGuards(RolesGuard));
}
