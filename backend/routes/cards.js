const mysql = require("mysql");
const CONFIG = require("../config");
const db_connection = mysql.createConnection(CONFIG.SQL_PORT);
const API_STUDENT_CARD =
  "select students.first_name,students.last_name,student_education.study_major,student_education.school_gpa,student_education.start_year,student_education.school,student_ratings.rating_total,student_profile_page.about_me,student_profile_page.profile_image,student_profile_page.school_grade_level from students join student_profile_page on students.student_id = student_profile_page.student_id join student_education on students.student_id=student_education.student_id left join student_projects on students.student_id=student_projects.student_id left join student_ratings on students.student_id = student_ratings.student_id ;";
const API_JOB_CARD =
  "select c_l.position_title,c_l.organization_name,c_l.salary,c_l.location,c_l.about_us,job_type  from company_listings c_l;";
//FrontEnd_Search_Filter
const API_STUDENT_CARD_FILTER = (search_append_filter) =>
  `select students.first_name,students.last_name,student_education.study_major,student_education.school_gpa,student_education.start_year,student_education.school,student_ratings.rating_total,student_profile_page.about_me,student_profile_page.profile_image,student_profile_page.school_grade_level from students join student_profile_page on students.student_id = student_profile_page.student_id join student_education on students.student_id=student_education.student_id left join student_projects on students.student_id=student_projects.student_id left join student_ratings on students.student_id = student_ratings.student_id${e} `;
//Job Card Query
const API_JOB_CARD_FILTER = (job_type, position_title) => {
  if (job_type == "Select" && position_title == "Select") {
    return API_JOB_CARD;
  }
  if (job_type == "Select") {
    return `select c_l.position_title,c_l.organization_name,c_l.salary,c_l.location,c_l.about_us, job_type  from company_listings c_l where c_l.position_title="${position_title}" ; ;`;
  }
  if (position_title == "Select") {
    return `select c_l.position_title,c_l.organization_name,c_l.salary,c_l.location,c_l.about_us, job_type  from company_listings c_l where job_type="${job_type}" ;`;
  } else {
    return `select c_l.position_title,c_l.organization_name,c_l.salary,c_l.location,c_l.about_us, job_type  from company_listings c_l where job_type="${job_type}" and c_l.position_title="${position_title}"  ;`;
  }
};
//Student Card Filter
const API_STUDENT_CARD_FILTER_V2 = (academic_major, student_year, rating_score, gpa_range, strength_keyword) => {
  var tmp_string = `select students.first_name,students.last_name,student_education.study_major,student_education.school_gpa,student_education.start_year,student_education.school,student_ratings.rating_total,student_profile_page.about_me,student_profile_page.profile_image,student_profile_page.school_grade_level,strengths_qualities from students join student_profile_page on students.student_id = student_profile_page.student_id join student_education on students.student_id=student_education.student_id left join student_projects on students.student_id=student_projects.student_id left join student_ratings on students.student_id = student_ratings.student_id where start_year >0 `;

  if (academic_major != "null") {
    tmp_string += `and student_education.study_major like "%${academic_major}%"`;
  }
  if (student_year != "null") {
    tmp_string += ` and student_profile_page.school_grade_level="${student_year}"`;
  }
  if (rating_score != "Select") {
    tmp_string += ` and student_ratings.rating_total = ${rating_score}`;
  }
  if (gpa_range != "Select") {
    tmp_string += ` and student_education.school_gpa > ${gpa_range}`;
  }
  if (strength_keyword != "") {
    tmp += ` and strengths_qualities like "%${strength_keyword}%"`;
  }
  return tmp_string;
};

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
  // Filter Student Cards @Jose_Student_Search_Implementation_Use
  app.get("/filter_students", (req, res) => {
    const { sql_command } = req.query;
    db_connection.query(API_STUDENT_CARD_FILTER(sql_command), (err, results) => {
      if (err) {
        console.log(`query-fail`);
        return res.send(err);
      } else {
        console.log(`query-success`);
        return res.json(results);
      }
    });
  });
  // Filter Job Cards
  app.get("/filter_job_cards", (req, res) => {
    const { job_type, position_title } = req.query;
    console.log(job_type, position_title);
    db_connection.query(API_JOB_CARD_FILTER(job_type, position_title), (err, results) => {
      if (err) {
        console.log(`query-fail`);
        return res.send(err);
      } else {
        console.log(`query-success`);
        return res.json(results);
      }
    });
  });
  //Filter Student Cards (Temporary)
  app.get("/filter_student_cards", (req, res) => {
    const { am, sy, rs, gpr, sk } = req.query;
    //console.log("Academc Major:", am, sy, rs, gpr, sk);
    API_STUDENT_CARD_FILTER_V2(am, sy, rs, gpr, sk);
    db_connection.query(API_STUDENT_CARD_FILTER_V2(am, sy, rs, gpr, sk), (err, results) => {
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
