import { Injectable } from '@nestjs/common';
import { Token, User } from './interfaces/user.interface';
import { AuthUser } from './auth.user';

@Injectable()
export class AuthService {
  constructor() {}

  validateUser(payload: Token): User {
    const user = new AuthUser(payload);
    return user;
  }
}
