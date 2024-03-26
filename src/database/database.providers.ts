import { DataSource } from 'typeorm';

import dsOptionsFactory from '../config/orm.config';
import { DATA_SOURCE } from './constants';

export const databaseProviders = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => {
      const dataSource = new DataSource(dsOptionsFactory());
      return dataSource.initialize();
    },
  },
];
