import * as Knex from 'knex';
import { USERS_TABLE } from '../migrations/20200521090629_create_users';

export async function seed(knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  return knex(USERS_TABLE)
    .del()
    .then(() => {
      // Inserts seed entries
      return knex(USERS_TABLE).insert([
        {
          id: 1,
          username: 'admin',
          password: '$2a$10$hyTRmSXcOw..vAqmCvFIouz97fB7WlkjU0mGzLrZtWikRzJVogz1W'
        },
        {
          id: 2,
          username: 'user',
          password: '$2a$10$xnwu5ZEbDSyLm5QEssppfeqogW7lrn/KcoOM6wk4qpSkSnkCOT0iy'
        }
      ]);
    });
}
