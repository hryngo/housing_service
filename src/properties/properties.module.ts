import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { DatabaseModule } from '../database/database.module';
import { PropertiesController } from './controllers/properties.controller';
import { RoomTypesController } from './controllers/room-types.controller';
import { propertiesProviders } from './properties.providers';
import { PropertiesService } from './services/properties.service';
import { RoomTypesService } from './services/room-types.service';

@Module({
  imports: [DatabaseModule, CqrsModule],
  providers: [...propertiesProviders, PropertiesService, RoomTypesService],
  controllers: [PropertiesController, RoomTypesController],
})
export class PropertiesModule {}
