/**
 * File: users.js
 * Purpose: Store GET | POST Methods any time user is directly involved
 * Functionality IE: Frontend Sign In | Sign Up | User Dashboard
 * Authors:
 * Aaron : Sign In | Profile | Professor Rate Students
 * Roland: Sign Up
 * Lyra: Security fix
 */
const mysql = require("mysql");
const CONFIG = require("../config");
const SQL_CONNECTION = mysql.createConnection(CONFIG.SQL_PORT);

module.exports = (app) => {
  //Register USER
  app.get("/full-job-view", (req, res) => {
    //Get Row Identifier
    let sql_job_information = `select * from company_listings where listing_id = ${req.query.identifier_listing_row};`;
    try {
      SQL_CONNECTION.query(sql_job_information, (err, results) => {
        if (err) {
          return res.send(err);
        } else {
          return res.json(results);
        }
      });
    } catch (e) {
      console.log(`Error ${e}`);
      return res.sendStatus(400);
    }
  });
};
