import * as Knex from 'knex';
import { USERS_TABLE } from './20200521090629_create_users';
import { ROLES_TABLE } from './20200521090637_create_roles';

export const USER_ROLES_TABLE = 'users_roles';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(USER_ROLES_TABLE, (table) => {
    table.specificType('user_id', 'bigint(10)').references('id').inTable(USERS_TABLE);
    table.specificType('roles', 'varchar(10)').references('name').inTable(ROLES_TABLE);
    table.primary(['user_id', 'roles']);
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable(USER_ROLES_TABLE);
}
