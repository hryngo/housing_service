import { Inject, Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';

import { RegisterPropertyCommand } from '../commands/register-property.command';
import { PROPERTY_REPOSITORY } from '../constants';
import { RegisterPropertyDto } from '../dtos/register-property.dto';
import { Property } from '../entities/property.entity';

@Injectable()
export class PropertiesService {
  constructor(
    private commandBus: CommandBus,
    @Inject(PROPERTY_REPOSITORY) private repo: Repository<Property>,
  ) {}

  async register(prop: RegisterPropertyDto) {
    return this.commandBus.execute(
      plainToInstance(RegisterPropertyCommand, prop, {
        excludeExtraneousValues: true,
      }),
    );
  }

  async findOne(id: number): Promise<Property> {
    return this.repo.findOneBy({ id });
  }

  async findOneByGuid(guid: string): Promise<Property> {
    return this.repo.findOneBy({ guid });
  }
}
