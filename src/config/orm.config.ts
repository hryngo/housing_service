import * as dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import { Environment } from './constants';

export const buildModuleOptions = (): TypeOrmModuleOptions => {
  const options = {
    synchronize: false,
    autoLoadEntities: true,
    entities: [join(__dirname, '../**/**/*entity{.ts,.js}')],
  };

  Object.assign(options, {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  });

  switch (process.env.NODE_ENV) {
    case Environment.Development:
      // TODO: db config for development
      break;

    case Environment.Test:
      // TODO: db config for test
      Object.assign(options, {
        migrationsRun: true,
      });
      break;

    case Environment.Production:
      // TODO: db config for production
      break;

    default:
      throw new Error('Unknown environment.');
  }
  return options;
};

export const buildDataSourceOptions = (): DataSourceOptions => {
  const options: DataSourceOptions = {
    ...buildModuleOptions(),
    namingStrategy: new SnakeNamingStrategy(),
  } as DataSourceOptions;

  Object.assign(options, {
    migrations: [join(__dirname, '../../migrations/**/*{.ts,.js}')],
    migrationsTableName: '__migrations',
    cli: {
      migrationsDir: 'migrations',
    },
    logging: true,
  } as Partial<DataSourceOptions>);

  return options;
};
export default (): DataSourceOptions => buildDataSourceOptions();
