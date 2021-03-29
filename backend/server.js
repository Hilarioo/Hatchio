const express = require("express");
const mysql = require("mysql");
var cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());

const { port_mysql } = require("./config");
const query = require("./mysql"); //mysql-querys

//DB Authentication
const db_connection = mysql.createConnection(port_mysql);

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
  res.sendFile(path.join(__dirname + "/index.html"));
});

//JSON Students
app.get("/students", (req, res) => {
  db_connection.query(query.USER_STUDENTS, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(results);
    }
  });
});
//JSON Professors
app.get("/professors", (req, res) => {
  db_connection.query(query.USER_PROFESSORS, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(results);
    }
  });
});
//JSON Employers
app.get("/employers", (req, res) => {
  db_connection.query(query.EMPLOYER_PROFILE_PAGE, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      res.json(results);
    }
  });
});
//JSON Admins
app.get("/admins", (req, res) => {
  db_connection.query(query.USER_ADMINS, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      res.json(results);
    }
  });
});
//JSON ProfessorProfile  Pages
app.get("/professorpages", (req, res) => {
  db_connection.query(query.PROFESSOR_PROFILE_PAGE, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      res.json(results);
    }
  });
});
//JSON Employee Profile Pages
app.get("/employerpages", (req, res) => {
  db_connection.query(query.EMPLOYER_PROFILE_PAGE, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      res.json(results);
    }
  });
});
//JSON Student Profile Pages
app.get("/studentpages", (req, res) => {
  db_connection.query(query.STUDENT_PROFILE_PAGE, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      res.json(results);
    }
  });
});
//JSON Company Listings Pages
app.get("/joblistings", (req, res) => {
  db_connection.query(query.COMPANY_LISTINGS, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      res.json(results);
    }
  });
});

app.listen(5000, () => `Backend-Live`);
