import { join } from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';

export const datasource: DataSourceOptions = {
  // type: 'sqlite',
  // database: 'typeorm-tx-test.sqlite',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'typeorm-tx-test',
  logging: true,
  entities: [join(__dirname, 'entities/**/*.entity.{js,ts}')],
  migrations: [join(__dirname, 'migrations/**/*.{js,ts}')],
};

export default new DataSource(datasource);
