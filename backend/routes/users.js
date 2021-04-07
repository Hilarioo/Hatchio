const mysql = require("mysql");
const CONFIG = require("../config");
const db_connection = mysql.createConnection(CONFIG.SQL_PORT);

//User Tables
const USER_STUDENTS = "select * from students";
const USER_PROFESSORS = "select * from professors";
const USER_EMPLOYERS = "select * from employers";
const USER_ADMINS = "select * from admins;";

//Sign Up User
const USER_SIGN_UP = (UserType, FirstName, LastName, schoolname, Password, Email, code) => {
  if ((UserType == "students") | (UserType == "professors")) {
    return `insert into ${UserType}(first_name,last_name,school_name,password,email,state,code) values ("${FirstName}","${LastName}","${schoolname}","${Password}","${Email}",0,"${code}");`;
  }
  if (UserType == "employers") {
    return `insert into ${UserType}(first_name,last_name,organization_name,password,email,state,code) values ("${FirstName}","${LastName}","${schoolname}","${Password}","${Email}",0,"${code}");`;
  }
};
//Sign In User Verification
const USER_SIGN_IN = (Email, Password) => {
  return `select exists (select * from students where email="${Email}" and password="${Password}");;`;
};

const SINGLE_PROFILE_DEMONSTRATIVE_QUERY = `select * from students join student_profile_page on students.student_id = student_profile_page.student_id join student_education on students.student_id=student_education.student_id left join student_projects on students.student_id=student_projects.student_id left join student_ratings on students.student_id = student_ratings.student_id limit 1;`;
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
  app.get("/register", (req, res) => {
    const { UserType, first_name, last_name, password, email, school_name, code } = req.query;
    console.log(req.query);
    db_connection.query(
      USER_SIGN_UP(UserType, first_name, last_name, school_name, password, email, code),
      (err, results) => {
        if (err) {
          console.log(`query-add-fail ${JSON.stringify(err)}`);
          return;
        } else {
          console.log(`query-add-success ${JSON.stringify(results)} `);
          return;
        }
      }
    );
    res.send("profile-added");
  });
  //Verify USER
  app.get("/sign_in", (req, res) => {
    const { Email, Password } = req.query;
    db_connection.query(USER_SIGN_IN(Email, Password), (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        //Ideally, return a JSON where we verify if email exists or not?
        res.json(results);
      }
    });
  });
  app.get("/full_profile", (req, res) => {
    db_connection.query(SINGLE_PROFILE_DEMONSTRATIVE_QUERY, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        console.log(results);
        res.json(results);
      }
    });
  });
};
//DELETE FROM students WHERE student_id=6;
