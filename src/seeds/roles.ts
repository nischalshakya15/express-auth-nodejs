import * as Knex from 'knex';
import { ROLES_TABLE } from '../migrations/20200521090637_create_roles';

export async function seed(knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  return knex(ROLES_TABLE)
    .del()
    .then(() => {
      // Inserts seed entries
      return knex(ROLES_TABLE).insert([{ name: 'ROLE_ADMIN' }, { name: 'ROLE_USER' }]);
    });
}
