import { Module } from '@nestjs/common';
import { PropertiesService } from './services/properties.service';
import { propertiesProviders } from './properties.providers';
import { DatabaseModule } from '../database/database.module';
import { PropertiesController } from './controllers/properties.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { RoomTypesController } from './controllers/room-types.controller';
import { RoomTypesService } from './services/room-types.service';

@Module({
  imports: [DatabaseModule, CqrsModule],
  providers: [...propertiesProviders, PropertiesService, RoomTypesService],
  controllers: [PropertiesController, RoomTypesController],
})
export class PropertiesModule {}
