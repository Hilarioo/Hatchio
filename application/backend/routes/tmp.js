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
          console.log("here");
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
  //POST Methods for Student Education
  app.post("/insert_student_education", (req, res) => {
    try {
      let sql_insert_student_education = `insert into student_education(student_id, school, degree, school_gpa, study_major, start_year, end_year) values(${req.body.Student_ID},"${req.body.school}","${req.body.degree}",${req.body.school_gpa},"${req.body.study_major}",${req.body.start_year},${req.body.end_year});`;
      console.log(sql_insert_student_education);
      SQL_CONNECTION.query(sql_insert_student_education, (err, results) => {
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
  //POST: Student Experience
  app.post("/insert-experience", (req, res) => {
    try {
      console.log(req.body);

      let sql_insert_experience = `
insert into student_experience
(student_id,experience_title_position,company_name, date_start,date_end,arr_work_done_keywords,description_experience,location,employment_type)
 values
(1,"Jelly Bean Packager","The America Factory, Inc",'2012-12-01','2012-12-31',"Java,Debugging,Backend","Worked on taking out the trash.","California","Full Time"),`;
      SQL_CONNECTION.query(sql_insert_experience, (err, results) => {
        if (err) {
          return res.sendStatus(400);
        } else {
          return res.sendStatus(200);
        }
      });
    } catch (e) {
      console.log(`${e}`);
    }
  });
  //PUT: Student About Me
  app.put("/about-me", (req, res) => {
    let sql = `update student_profile_page sp set about_me = "${req.query.about_me}" where sp.student_id = ${req.query.id};`;
    try {
      SQL_CONNECTION.query(sql, (err, results) => {
        if (err) {
          //Error
          console.log(err);
          return res.sendStatus(400);
        } else {
          console.log("ok");
          //True
          return res.sendStatus(200);
        }
      });
    } catch (e) {
      console.log(`${e}`);
    }
  });
  //GET: Student Ratings for Notifications
  app.get("/student-ratings", (req, res) => {
    let sql = `select * from student_Ratings where student_id =${req.query.s_id} `;
    let sql_v = `select professors.professor_id,rating_total,professors.first_name,publish_date,student_seen,student_hide  from student_ratings sr inner join professors on sr.professor_id = professors.professor_id where sr.student_id = ${req.query.s_id};`;
    console.log(sql);
    try {
      SQL_CONNECTION.query(sql_v, (err, results) => {
        if (err) {
          console.log(err);
          return res.sendStatus(400); //Error code easier for frontend to process
        } else {
          return res.json(results);
        }
      });
    } catch (e) {
      console.log(`Error ${e}`);
    }
  });
  //POST: Altering states to control student ratings notifications
};
