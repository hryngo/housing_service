import { DataSource } from 'typeorm';

import dsOptionsFactory from './config/orm.config';

export default new DataSource(dsOptionsFactory());
