import { config } from './config';

export const knexConfig = {
  ...config.database,
  migrations: {
    tableName: 'migrations_express_server',
    directory: '../migrations',
    extensions: ['ts']
  },
  seeds: {
    directory: '../seeds'
  }
};

module.exports = knexConfig;
