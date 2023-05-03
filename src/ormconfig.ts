import { join } from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';

const datasource: DataSourceOptions = {
  type: 'sqlite',
  database: 'typeorm-tx-test.sqlite',
  entities: [join(__dirname, 'entities/**/*.entity.{js,ts}')],
  migrations: [join(__dirname, 'migrations/**/*.{js,ts}')],
};

export default new DataSource(datasource);
