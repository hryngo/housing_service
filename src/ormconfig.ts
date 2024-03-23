import dsOptionsFactory from './config/orm.config';
import { DataSource } from 'typeorm';

export default new DataSource(dsOptionsFactory());
