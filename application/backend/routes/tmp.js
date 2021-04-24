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
  //POST: Job Listing From Employer
  app.post("/insert_job", (req, res) => {
    try {
      let sql_insert_job_listings = `insert into company_listings(employer_id,organization_name,position_title,location,job_type,experience_years,experience_level,salary,about_us,the_opportunity,skillset,benefits,task_responsibilities) values (${req.body.Employer_ID},"${req.body.organization_name}","${req.body.position_title}","${req.body.location}","${req.body.job_type}",${req.body.experience_years},"${req.body.experience_levels}",${req.body.salary},"${req.body.about_us}","${req.body.the_opportunity}","${req.body.skillset}","${req.body.benefits}","${req.body.task_responsibilities}");`;
      SQL_CONNECTION.query(sql_insert_job_listings, (err, results) => {
        if (err) {
          //Send 400: Bad Request
          return res.sendStatus(400);
        } else {
          //Send 201: Request Created
          return res.sendStatus(200);
        }
      });
    } catch (e) {
      console.log(`Error ${e}`);
      return res.sendStatus(400);
    }
  });
};
