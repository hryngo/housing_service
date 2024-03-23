import { DataSource } from 'typeorm';
import { DATA_SOURCE } from './constants';
import dsOptionsFactory from '../config/orm.config';

export const databaseProviders = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => {
      const dataSource = new DataSource(dsOptionsFactory());
      return dataSource.initialize();
    },
  },
];
