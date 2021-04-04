const mysql = require("mysql");
const CONFIG = require("../config");
const db_connection = mysql.createConnection(CONFIG.SQL_PORT);

//User Tables
const USER_STUDENTS = "select * from students";
const USER_PROFESSORS = "select * from professors";
const USER_EMPLOYERS = "select * from employers";
const USER_ADMINS = "select * from admins;";

//Sign Up User
const USER_SIGN_UP = (UserType, FirstName, LastName, Email, Password, Description_Tag) => {
  if ((UserType == "students") | (UserType == "professors")) {
    return `insert into ${UserType}(first_name,last_name,school_name,password,email,state,code) values ("${FirstName}","${LastName}","${Description_Tag}","${Password}","${Email}",0,500);`;
  }
  if (UserType == "employers") {
    return `insert into ${UserType}(first_name,last_name,organization_name,password,email,state,code) values ("${FirstName}","${LastName}","${Description_Tag}","${Password}","${Email}",0,500);`;
  }
};

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
    db_connection.query(
      USER_SIGN_UP(
        React_Form_User.UserType,
        React_Form_User.FirstName,
        React_Form_User.LastName,
        React_Form_User.Email,
        React_Form_User.Password,
        React_Form_User.DescriptionTag
      ),
      (err, results) => {
        if (err) {
          console.log(err);
          return res.send(err);
        } else {
          console.log(results);
          return res.json(results);
        }
      }
    );
  });
};
