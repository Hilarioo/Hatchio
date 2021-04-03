const mysql = require("mysql");
const CONFIG = require("../../configuration/config");
const db_connection = mysql.createConnection(CONFIG.SQL_PORT);

//User Tables
const USER_STUDENTS = "select * from students";
const USER_PROFESSORS = "select * from professors";
const USER_EMPLOYERS = "select * from employers";
const USER_ADMINS = "select * from admins;";

module.exports = function (app) {
  //JSON Students
  app.get("/students", (req, res) => {
    db_connection.query(USER_STUDENTS, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json(results);
      }
    });
  });
  //JSON Professors
  app.get("/professors", (req, res) => {
    db_connection.query(USER_PROFESSORS, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json(results);
      }
    });
  });
  //JSON Employers
  app.get("/employers", (req, res) => {
    db_connection.query(USER_EMPLOYERS, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        res.json(results);
      }
    });
  });
  //JSON Admins
  app.get("/admins", (req, res) => {
    db_connection.query(USER_ADMINS, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        res.json(results);
      }
    });
  });
  //Reset Database
  app.get("/database_reset", (req, res) => {
    dataArr.forEach((query) => {
      if (query) {
        query += ");";
        db_connection.query(query, (err, results) => {
          if (err) {
            throw err;
          } else {
            console.log(results);
          }
        });
      }
    });
    res.send("done");
  });
};
