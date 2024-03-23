import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { RegisteredPropertyEvent } from '../events/registered-property.event';

@EventsHandler(RegisteredPropertyEvent)
export class RegisteredPropertyHandler
  implements IEventHandler<RegisteredPropertyEvent>
{
  constructor() {}

  handle(event: RegisteredPropertyEvent) {
    //TODO: Handle business logic such as sending hotelier a confirmation email.
    console.log(event);
  }
}
