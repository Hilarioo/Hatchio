const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");

const { port_mysql } = require("./config");
const { registerUser, profileSearch, jobSearch, PROFILE_PAGES, JOB_LISTINGS } = require("./mysql");

app.use(cors());

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
  res.send("BackEnd-Express-Server-Root-Page");
});

//JSON Profile Pages
app.get("/profilepages", (req, res) => {
  db_connection.query(PROFILE_PAGES, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(results);
    }
  });
});
//Json Job Listings
app.get("/joblistings", (req, res) => {
  db_connection.query(JOB_LISTINGS, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        JobListingsTable: results,
      });
    }
  });
});
//Add Profile
app.get("/register", (req, res) => {
  const { first_name, last_name, password, email, school_name, student, professor, employer, company_name } = req.query;
  console.log(req.query);
  db_connection.query(
    registerUser(first_name, last_name, email, password, student, professor, employer, school_name, company_name),
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
//Search Profiles
app.get("/search/profiles", (req, res) => {
  const { keyword } = req.query;
  console.log(req.query);
  db_connection.query(profileSearch(keyword), (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(results);
    }
  });
});
//Search Job Listings
app.get("/search/joblistings", (req, res) => {
  const { keyword, miles } = req.query;
  console.log(req.query);
  db_connection.query(jobSearch(keyword, miles), (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        JobListings_Search_Results: results,
      });
    }
  });
});

app.listen(5000, () => `Backend-Live`);