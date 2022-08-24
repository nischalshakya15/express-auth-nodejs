import * as Knex from 'knex';

const TABLE_NAME = 'refresh_tokens';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments();
    table.bigInteger('user_id').notNullable();
    table.text('refresh_token').notNullable();
    table.dateTime('expiry_time').notNullable();
    table.boolean('revoked').notNullable().defaultTo(false);
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'));
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable(TABLE_NAME);
}
