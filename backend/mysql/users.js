const USER_STUDENTS = "select * from students";
const USER_PROFESSORS = "select * from professors";
const USER_EMPLOYERS = "select * from employers";
const USER_ADMINS = "select * from admins;";
const USER_PROFILE = (table, id) => {
  if (table == "student") {
    return `SELECT * FROM students s RIGHT JOIN student_profile_page sp ON s.student_id = sp.student_id RIGHT JOIN student_education se ON s.student_id = se.student_id RIGHT JOIN student_projects spp ON s.student_id = spp.student_id RIGHT JOIN student_ratings sr ON s.student_id = sr.student_id WHERE s.student_id = ${id};`;
  }
  if (table == "professor") {
    return `select * from ${table}s where ${table}_id= ${id};`;
  }
  if (table == "employer") {
    return `select * from employers e right join company_listings cl on e.employer_id=cl.employer_id where e.employer_id =${id};`;
  }
};
module.exports = {
  USER_STUDENTS,
  USER_PROFESSORS,
  USER_EMPLOYERS,
  USER_ADMINS,
  USER_PROFILE,
};
