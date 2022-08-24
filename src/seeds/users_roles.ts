import * as Knex from 'knex';
import { USER_ROLES_TABLE } from '../migrations/20200521102401_create_user_roles';

export async function seed(knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  return knex(USER_ROLES_TABLE)
    .del()
    .then(() => {
      // Inserts seed entries
      return knex(USER_ROLES_TABLE).insert([
        { user_id: 1, roles: 'ROLE_ADMIN' },
        { user_id: 2, roles: 'ROLE_USER' }
      ]);
    });
}
