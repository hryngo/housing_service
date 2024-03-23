import { User as IUser, Token } from './interfaces/user.interface';

export class AuthUser implements IUser {
  token: Token;
  id: string;
  username: string;

  constructor(token: Token) {
    this.token = token;
  }

  getRoles(): string[] {
    return this.token.roles || [];
  }
}
