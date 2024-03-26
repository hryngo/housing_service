import { Token, User as IUser } from './interfaces/user.interface';

export class AuthUser implements IUser {
  token: Token;
  id: string;
  username: string;

  constructor(token: Token) {
    this.token = token;
  }

  get roles(): string[] {
    return this.getRoles();
  }

  getRoles(): string[] {
    return this.token.roles || [];
  }

  hasRoles(...requiredRoles: string[]): boolean {
    return requiredRoles.some((role) => this.roles.includes(role));
  }
}
