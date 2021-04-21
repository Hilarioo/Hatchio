/**
 * File: users.js
 * Purpose: Store GET | POST Methods any time user is directly involved
 * Functionality IE: Frontend Sign In | Sign Up | User Dashboard
 * Authors:
 * Aaron : Sign In | Profile | Professor Rate Students
 * Roland: Sign Up
 * Lyra: Security fix
 */
const SQL_QUERY_USER = require("../mysql/users");
const SQL_QUERY_POST = require("../mysql/rate");
const SQL_QUERY = require("../mysql/userauth");
const SQL_CONNECTION = require('../config').SQL_CONNECTION;

module.exports = (app) => {
  //Register USER
  app.get("/register", (req, res) => {
    SQL_QUERY.USER_SIGN_UP(SQL_CONNECTION, req.query, (err, results) => {
      if (err) {
        console.log(`query-add-fail ${JSON.stringify(err)}`);
        return;
      } else {
        console.log(`query-add-success ${JSON.stringify(results)} `);
        return;
      }
    });
    res.send("profile-added");
  });
  //Verify User and Store Browser Cookie
  // TODO: This has SQL injection vulnerabilities, but also, it doesn't bring any security in theory either,
  // from what I can tell.
  app.get("/sign_in", (req, res) => {
    const { Email, Password, Type } = req.query;
    const Query_Verify = `select x.${Type}_id,x.first_name from ${Type}s x where email="${Email}" and password="${Password}";`;
    SQL_CONNECTION.query(Query_Verify, (err, results) => {
      if (err) {
        res.send(false);
      } else {
        try {
          var tmpo = [];
          for (key in results[0]) {
            tmpo.push(key);
          }
          res.cookie("Type_User", Type);
          res.cookie("ID_OF_USER", results[0][tmpo[0]]);
          res.cookie("First_Name", results[0][tmpo[1]]);
          res.send(true);
        } catch (e) {
          res.send(false);
        }
      }
    });
  });
  //Get User Profile
  app.get("/profile", (req, res) => {
    SQL_QUERY_USER.USER_PROFILE(SQL_CONNECTION, req.query, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json(results);
      }
    });
  });
  // Insert Student Rating TODO: POST METHOD
  app.get("/rate_student", (req, res) => {
    SQL_QUERY_POST.PROFESSOR_RATE_STUDENT(SQL_CONNECTION, req.query, (err,results) => {
      if (err) {
        res.send(false);
      } else {
        //console.log(results);
        res.send(true);
      }
    });
  });
};
