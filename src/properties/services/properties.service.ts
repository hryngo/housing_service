import { Inject, Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { RegisterPropertyDto } from '../dtos/register-property.dto';
import { RegisterPropertyCommand } from '../commands/register-property.command';
import { plainToInstance } from 'class-transformer';
import { Property } from '../entities/property.entity';
import { Repository } from 'typeorm';
import { PROPERTY_REPOSITORY } from '../constants';

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
    return this.repo.findOneByOrFail({ guid });
  }
}
