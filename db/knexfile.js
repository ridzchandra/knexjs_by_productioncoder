/** @format */

// This file is generated by running 'npx knex init'
// We need this file to run the migrations

// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
	// Don't hardcode the credentials here, get them from an env file
	development: {
		client: "postgresql",
		connection: {
			database: "knex_tute",
			user: "rballa",
			password: null,
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
		},
	},
};
