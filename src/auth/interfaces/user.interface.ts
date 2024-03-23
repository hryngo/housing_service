import { TokenResult } from './token-result.interface';

export interface Token extends TokenResult {
  roles: string[];
}

export interface User {
  token: Token;
  id: string;
  username: string;
  getRoles(): string[];
}
