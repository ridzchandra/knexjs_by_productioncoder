/** @format */

const personDAO = require("../dao/person.js");

class PersonService {
	createPerson({ firstName, lastName, email }) {
		console.log("service");
		return personDAO.createPerson(firstName, lastName, email);
	}
}

module.exports = new PersonService();
