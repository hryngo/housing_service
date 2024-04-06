export enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
  Provision = 'provision',
}

export class SwaggerDocument {
  static readonly Title = 'Housing API document';
  static readonly Description =
    'Housing Service is a fundamental hotel reservation booking system designed to streamline the process of booking hotel rooms for users';
  static readonly Version = '1.0';
  static readonly Tag = 'housing';
}
