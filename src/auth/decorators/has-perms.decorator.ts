import { applyDecorators, UseGuards } from '@nestjs/common';

import { PermsGuard } from '../guards/perms.guard';
import { Perms } from './perms.decorator';

export function HasPerms(...perms: string[]) {
  return applyDecorators(Perms(perms), UseGuards(PermsGuard));
}
