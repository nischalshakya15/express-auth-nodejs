import Knex from 'knex';
import knex from '../config/knex.config';

export function connection(tx?: Knex) {
  return tx || knex;
}
