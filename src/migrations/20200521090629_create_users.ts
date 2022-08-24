import * as Knex from 'knex';

export const USERS_TABLE = 'users';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(USERS_TABLE, (table) => {
    table.specificType('id', 'bigint(10) not null primary key auto_increment');
    table.string('username', 50).notNullable().unique();
    table.string('password', 200).notNullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable(USERS_TABLE);
}
