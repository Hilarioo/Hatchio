/**
 * File: tables.js
 * Purpose: These Route Definitions are just GET methods to aid in development.
 * Functionality IE: When you want to test a sign_in credential, you can use postman|browser to see JSON of what current cred users are in the database tables.
 * Author:Aaron
 */
const mysql = require("mysql");
const CONFIG = require("../config");
const SQL_QUERY = require("../mysql/users");
const DB_CONNECTION = mysql.createConnection(CONFIG.SQL_PORT);

module.exports = (app) => {
  //JSON Students
  app.get("/students", (req, res) => {
    DB_CONNECTION.query(SQL_QUERY.USER_STUDENTS, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json(results);
      }
    });
  });
  //JSON Professors
  app.get("/professors", (req, res) => {
    DB_CONNECTION.query(SQL_QUERY.USER_PROFESSORS, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json(results);
      }
    });
  });
  //JSON Employers
  app.get("/employers", (req, res) => {
    DB_CONNECTION.query(SQL_QUERY.USER_EMPLOYERS, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        res.json(results);
      }
    });
  });
  //JSON Admins
  app.get("/admins", (req, res) => {
    DB_CONNECTION.query(SQL_QUERY.USER_ADMINS, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        res.json(results);
      }
    });
  });
};
