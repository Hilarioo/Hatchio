const query = require("../mysql");
const mysql = require("mysql");
const { port_mysql } = require("../config");
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
module.exports = function (app) {
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

  //JSON Public Student Profile Page
  app.get("/student_public_pages", (req, res) => {
    db_connection.query(query.RENDER_PUBLIC_PROFILE, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        res.json(results);
      }
    });
  });
};
