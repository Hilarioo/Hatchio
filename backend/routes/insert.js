/**
 * File: insert.js
 * Purpose: POST Methods any time user inserts data
 * Functionality IE: Frontend Employer's Dashboard to Post Jobs
 * Author: Aaron
 */
const mysql = require("mysql");
const CONFIG = require("../config");
const db_connection = mysql.createConnection(CONFIG.SQL_PORT);

module.exports = (app) => {
  //POST: Job Listing From Employer
  app.post("/insert_job", (req, res) => {
    let sql_insert_job_listings = `insert into company_listings(employer_id,organization_name,position_title,location,job_type,experience_years,experience_level,salary,about_us,the_opportunity,skillset,benefits,task_responsibilities) values (${req.body.Employer_ID},"${req.body.organization_name}","${req.body.position_title}","${req.body.location}","${req.body.job_type}",${req.body.experience_years},"${req.body.experience_levels}",${req.body.salary},"${req.body.about_us}","${req.body.the_opportunity}","${req.body.skillset}","${req.body.benefits}","${req.body.task_responsibilities}");`;
    db_connection.query(sql_insert_job_listings, (err, results) => {
      if (err) {
        //Send 400: Bad Request
        return res.sendStatus(400);
      } else {
        //Send 201: Request Created
        return res.sendStatus(200);
      }
    });
  });
  //POST: Student Profile Page
  app.post("/insert_student_profile_page", (req, res) => {
    let sql_insert_student_profile_page = `
    insert into student_profile_page(student_id,about_me,strengths_qualities,location,school_grade_level) values (${req.body.Student_ID},"${req.body.about_me}","${req.body.strengths_qualities}","${req.body.location}","${req.body.school_grade_level}");
    `;
    db_connection.query(sql_insert_student_profile_page, (err, result) => {
      if (err) {
        //Send 400: Bad Request
        return res.sendStatus(400);
      } else {
        //Send 201: Request Created
        return res.sendStatus(200);
      }
    });
  });
};
