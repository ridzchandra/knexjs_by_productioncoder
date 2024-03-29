/** @format */

const express = require("express");
const router = require("./routes");

const app = express();
app.use(express.json());
app.use(router);

app.listen(8000, () => console.log("Server listening on port 8000"));
