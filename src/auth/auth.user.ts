import { Token, User as IUser } from './interfaces/user.interface';

export class AuthUser implements IUser {
  token: Token;
  id: string;
  username: string;

  constructor(token: Token) {
    this.token = token;
    this.id = this.token.sub as string;
  }

  get permissions(): string[] {
    return this.getPermissions();
  }

  getPermissions(): any {
    return this.token.permissions || [];
  }

  hasPerms(...requiredPerms: string[]): boolean {
    return requiredPerms.some((perm) => this.permissions.includes(perm));
  }
}
