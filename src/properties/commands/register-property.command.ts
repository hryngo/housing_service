import { Expose } from 'class-transformer';

export class RegisterPropertyCommand {
  @Expose()
  readonly name: string;

  @Expose()
  readonly description: string;

  @Expose()
  readonly group: string;

  @Expose()
  readonly brand: string;

  @Expose()
  readonly roomCount: number;

  @Expose()
  readonly currency: string;

  @Expose()
  readonly phoneNumber: string;

  @Expose()
  readonly emailAddress: string;

  @Expose()
  readonly addressLine: string;

  @Expose()
  readonly rating: number;

  @Expose()
  readonly hotelier: string;
}
