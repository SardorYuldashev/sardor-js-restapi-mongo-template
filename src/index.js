const express = require("express");
const db = require("./db");
const config = require("./shared/config");
const handleError = require("./shared/errors/handle");
const usersRoute = require("./modules/users/_api");

const app = express();

app.use(express.json());

app.use(usersRoute);

app.use(handleError);

db();
app.listen(config.port, () => {
    console.log(`http://localhost:${config.port}`);
});