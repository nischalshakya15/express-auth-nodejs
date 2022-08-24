import * as Knex from 'knex';

export const ROLES_TABLE = 'roles';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(ROLES_TABLE, (table) => {
    table.string('name', 50).primary();
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable(ROLES_TABLE);
}
