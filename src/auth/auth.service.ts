import { Injectable } from '@nestjs/common';

import { AuthUser } from './auth.user';
import { Token, User } from './interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor() {}

  validateUser(payload: Token): User {
    const user = new AuthUser(payload);
    return user;
  }
}
