import { DataSource } from 'typeorm';
import { Property } from './entities/property.entity';
import { PROPERTY_REPOSITORY, ROOM_TYPE_REPOSITORY } from './constants';
import { DATA_SOURCE } from '../database/constants';
import { RegisterPropertyHandler } from './handlers/register-property.handler';
import { RegisteredPropertyHandler } from './handlers/registered-property.handler';
import { RoomType } from './entities/room-type.entity';
import { CreateRoomTypeHandler } from './handlers/create-room-type-handler';

export const propertiesProviders = [
  {
    provide: PROPERTY_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Property),
    inject: [DATA_SOURCE],
  },
  {
    provide: ROOM_TYPE_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(RoomType),
    inject: [DATA_SOURCE],
  },
  RegisterPropertyHandler,
  RegisteredPropertyHandler,
  CreateRoomTypeHandler,
];
