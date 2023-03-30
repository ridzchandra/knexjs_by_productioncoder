/** @format */

const personService = require("../service/person");

class PersonController {
	async createPerson(req, res) {
		console.log("controller");
		try {
			const id = await personService.createPerson(req.body);
			res.status(201).json(id);
		} catch (err) {
			console.error(err);
		}
	}

	show() {
		return { test: 1 };
	}
}

module.exports = new PersonController();
