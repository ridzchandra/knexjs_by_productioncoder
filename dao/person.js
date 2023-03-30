/** @format */

const db = require("../db/db");

class PersonDAO {
	async createPerson(firstName, lastName, email) {
		const [id] = await db("person")
			.insert({
				email,
				first_name: firstName,
				last_name: lastName,
			})
			.returning("id"); // returns the PK of the inserted person
		return id;
	}
}

module.exports = new PersonDAO();
