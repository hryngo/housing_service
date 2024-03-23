import { Property } from '../entities/property.entity';

export class RegisteredPropertyEvent {
  constructor(public readonly property: Property) {}
}
