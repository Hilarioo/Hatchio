const mysql = require("mysql");
const CONFIG = require("../config");
const db_connection = mysql.createConnection(CONFIG.SQL_PORT);

//User Tables
const USER_STUDENTS = "select * from students";
const USER_PROFESSORS = "select * from professors";
const USER_EMPLOYERS = "select * from employers";
const USER_ADMINS = "select * from admins;";

//Sign Up User
const USER_REGISTER = [
  `insert into students(first_name,last_name,password,email) values ("First_Name","Last_Name","password","wooble@mail.com");`,
  `insert into professors(first_name,last_name,password,email) values ("Henry","Villar","pass12345","random@mail.com");`,
  `insert into employers(organization_name,password,email) values ("Organization_Name","los12345","random@mailr.com");`,
];

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

  //Register USER
  app.post("/register", (req, res) => {
    const React_Form_User = req.body;
    console.log(
      React_Form_User.FirstName,
      React_Form_User.LastName,
      React_Form_User.Password,
      React_Form_User.UserType,
      React_Form_User.SchoolName,
      React_Form_User.OrganizationName
    );
    /*
    db_connection.query(USER_STUDENTS, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json(results);
      }
    });
    */
    //   console.log(React_Form_User);
    console.log(React_Form_User);
    return res.send("test");
  });
};
