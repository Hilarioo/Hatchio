const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");

const { port_mysql } = require("./config");
const {
  registerUser,
  profileSearch,
  jobSearch,
  profilePages,
  jobListings,
  requestReview,
  fillReview,
  talentSearch
} = require("./mysql");

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

const fillQuery = (url, task) => {
  app.get(url, (req, res) => {
    console.log(req.query);
    task(req.query, db_connection, (err, results) => {
      if (err) {
        console.log(err);
        return res.send(err);
      } else {
        return res.json(results);
      }
    });
  });
};

fillQuery("/profilepages", profilePages); // JSON Profile Pages
fillQuery("/joblistings", jobListings); // JSON Job Listings
fillQuery("/register", registerUser); //Add Profile
fillQuery("/search/profiles", profileSearch); //Search Profiles
fillQuery("/search/joblistings", jobSearch); //Search Job Listings
fillQuery("/review/request", requestReview);
fillQuery("/review/fill", fillReview);
fillQuery("/search/talent", talentSearch);

app.listen(5000, () => `Backend-Live`);
