/** @format */

const express = require("express");
const personController = require("../controllers/person");

const router = express.Router();
router.post("/person", personController.createPerson);
router.get("/person", personController.show);

module.exports = router;
