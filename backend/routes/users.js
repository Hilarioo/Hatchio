const mysql = require("mysql");
const CONFIG = require("../config");
const db_connection = mysql.createConnection(CONFIG.SQL_PORT);

//User Tables
const USER_STUDENTS = "select * from students";
const USER_PROFESSORS = "select * from professors";
const USER_EMPLOYERS = "select * from employers";
const USER_ADMINS = "select * from admins;";

//Sign Up User
const USER_SIGN_UP = (
  UserType,
  FirstName,
  LastName,
  schoolname,
  Password,
  Email,
  code
) => {
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
    const {
      UserType,
      first_name,
      last_name,
      password,
      email,
      school_name,
      code,
    } = req.query;
    console.log(req.query);
    db_connection.query(
      USER_SIGN_UP(
        UserType,
        first_name,
        last_name,
        school_name,
        password,
        email,
        code
      ),
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
  //Verify User and Store Browser Cookie
  app.get("/sign_in", (req, res) => {
    const { Email, Password, Type } = req.query;
    console.log(req.query);
    const Query_Verify = `select x.${Type}_id,x.first_name from ${Type}s x where email="${Email}" and password="${Password}";`;
    db_connection.query(Query_Verify, (err, results) => {
      if (err) {
        console.log(err);
        res.send("oops");
      } else {
        var tmpo = [];
        for (key in results[0]) {
          tmpo.push(key);
        }
        res.cookie("Type_User", Type);
        res.cookie("ID_OF_USER", results[0][tmpo[0]]);
        res.cookie("First_Name", results[0][tmpo[1]]);
        res.send(results);
      }
    });
  });
  //Get User Profile
  app.get("/profile", (req, res) => {
    //WORKING_ON
    const { ts, bs } = req.query;
    console.log(ts);
    console.log(bs);
    //General String
    var tmp_query_string = `select * from ${ts}s where ${ts}_id= ${bs}`;
    //Student String
    var tmp_quer_pt2 = `SELECT
    *
FROM
    students s
        RIGHT JOIN
    student_profile_page sp ON s.student_id = sp.student_id
        RIGHT JOIN
    student_education se ON s.student_id = se.student_id
        RIGHT JOIN
    student_projects spp ON s.student_id = spp.student_id
        RIGHT JOIN
    student_ratings sr ON s.student_id = sr.student_id
WHERE
    s.student_id = ${bs};`;
    db_connection.query(tmp_quer_pt2, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        console.log(results);
        return res.json(results);
      }
    });
  });
};
