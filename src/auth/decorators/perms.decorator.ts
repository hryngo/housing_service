import { Reflector } from '@nestjs/core';

export const Perms = Reflector.createDecorator<string[]>();
