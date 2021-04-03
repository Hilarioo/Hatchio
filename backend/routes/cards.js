const mysql = require("mysql");
const CONFIG = require("../config");
const db_connection = mysql.createConnection(CONFIG.SQL_PORT);

const API_STUDENT_CARD =
  "select students.first_name,students.last_name,student_education.study_major,student_education.school_gpa,student_education.start_year,student_education.school,student_ratings.rating_total,student_profile_page.about_me,student_profile_page.profile_image from students join student_profile_page on students.student_id = student_profile_page.student_id join student_education on students.student_id=student_education.student_id left join student_projects on students.student_id=student_projects.student_id left join student_ratings on students.student_id = student_ratings.student_id ;";
const API_JOB_CARD =
  "select c_l.position_title,c_l.organization_name,c_l.salary,c_l.location,c_l.about_us,job_type  from company_listings c_l;";

const API_STUDENT_CARD_FILTER = "first half, second half appended by jose sends back";

module.exports = function (app) {
  //Student Cards Preload
  app.get("/student_cards", (req, res) => {
    db_connection.query(API_STUDENT_CARD, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json(results);
      }
    });
  });
  //Job Cards Preload
  app.get("/job_cards", (req, res) => {
    db_connection.query(API_JOB_CARD, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json(results);
      }
    });
  });
  //Dynamic Filtering Student
  app.get("/filter_students", (req, res) => {
    const { sql_command } = req.query;
    db_connection.query(sql_command, (err, results) => {
      if (err) {
        console.log(`query-fail`);
        return res.send(err);
      } else {
        console.log(`query-success`);
        return res.json(results);
      }
    });
  });
};
