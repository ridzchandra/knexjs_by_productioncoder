/** @format */

// This file is auto generated by running "npx knex migrate:make init --migrations-directory <path_to_directory>"
// To run the latest migration - run "npx knex migrate:latest --knexfile <path_to_knexfile>" - This will check the migrations directory, take a look which migrations have not run and then run them
// This paticular migration will create two more tables in addition to person, knex_migrations and knex_migrations_lock
// knex_migrations will have a table of all the migrations that have run and the respective timestamps
// knex_migrations_lock is called MUTEX (Mutual Exclusion) which is used by all migration tools to make sure that no two migrations from different connections run at the same time. It does that by setting the is_locked field to 1 from 0, so that all other connections will know that a migration is currently running

// Every migration file has up and down functions. You have to write the schema changes you want to happen in this migration in up and the code to undo those particular schema changes in down.

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable("person", (table) => {
		// This callback function is to describe the table
		// the line below says that this table needs to have a ciolumn "id" and it's autoincremt
		// Typically you might want to replace this integer as a uuid when you use it as a PK
		// Always use snake case for db field names and not camel case coz some dbs are case insensitive
		table.increments("id");
		table.string("email").notNullable().unique();
		table.string("first_name").notNullable();
		table.string("last_name").notNullable();
		// The below line creates created_at and updated_at fields - https://knexjs.org/guide/schema-builder.html#timestamps
		table.timestamps(true, true);
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("person");
};
