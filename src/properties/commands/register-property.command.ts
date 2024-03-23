import { Expose } from 'class-transformer';

export class RegisterPropertyCommand {
  @Expose()
  readonly name: string;

  @Expose()
  readonly description: string;

  @Expose()
  readonly brand: string;

  @Expose()
  readonly phoneNumber: string;

  @Expose()
  readonly emailAddress: string;

  @Expose()
  readonly rating: number;

  @Expose()
  readonly hotelier: string;
}
