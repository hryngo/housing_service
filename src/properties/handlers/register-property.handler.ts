import { Inject } from '@nestjs/common';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Repository } from 'typeorm';

import { RegisterPropertyCommand } from '../commands/register-property.command';
import { PROPERTY_REPOSITORY } from '../constants';
import { Property } from '../entities/property.entity';
import { RegisteredPropertyEvent } from '../events/registered-property.event';

@CommandHandler(RegisterPropertyCommand)
export class RegisterPropertyHandler
  implements ICommandHandler<RegisterPropertyCommand>
{
  constructor(
    @Inject(PROPERTY_REPOSITORY) private repo: Repository<Property>,
    private publisher: EventPublisher,
  ) {}

  async execute(command: RegisterPropertyCommand) {
    const prop = this.publisher.mergeObjectContext(this.repo.create(command));
    prop.apply(new RegisteredPropertyEvent(prop));
    await this.repo.save(prop);
    prop.commit();
    return prop;
  }
}
