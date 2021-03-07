const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");

const {
  mysql_credentials,
  aws_mysql_credentials,
  displayUsers,
  registerUser,
  authenticateUser,
} = require("./db-config");

app.use(cors());

//DB Authentication
const db_connection = mysql.createConnection(aws_mysql_credentials);

//DB On Connection
db_connection.connect((err) => {
  if (err) {
    console.log(`error invoked: ${err}`);
    return err;
  } else {
    console.log("connection-paired");
  }
});

//Root Page
app.get("/", (req, res) => {
  res.send("BackEnd-Express-Server-Root-Page");
});

//Display Users
app.get("/users", (req, res) => {
  db_connection.query(displayUsers, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        userTable: results,
      });
    }
  });
});
//Add Users
app.get("/users/register", (req, res) => {
  const { email, password } = req.query;
  db_connection.query(registerUser(email, password), (err, results) => {
    if (err) {
      // return res.send(err);
      console.log(`query-add-fail ${JSON.stringify(err)}`);
      return;
    } else {
      console.log(`query-add-success ${JSON.stringify(results)} `);
      return;
    }
  });
  res.send("adding user");
});

//Login User
app.get("/users/login", (req, res) => {
  const { email, password } = req.query;
  db_connection.query(authenticateUser(email, password), (err, results) => {
    if (err) {
      console.log(`query-login-not-found`);
      return;
    } else {
      console.log(`query-login-found ${JSON.stringify(results)}`);
      return;
    }
  });
});

app.listen(5000, () => `Backend-Live`);
