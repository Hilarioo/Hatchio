const express = require("express");
const mysql = require("mysql");
const app = express();
//require("dotenv").config();
var connection = mysql.createConnection({
  host: "localhost",
  user: "myroot",
  password: "goose10",
  insecureAuth: "true",
  database: "acme",
  multipleStatements: true,
});
connection.connect(function (err) {
  if (err) {
    console.log(`Database connection failed ${err}`);
    return;
  } else {
    console.log("Database Connected successfully");
  }
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);

