//User Tables
const USER_STUDENTS = "select * from students";
const USER_PROFESSORS = "select * from professors";
const USER_EMPLOYERS = "select * from employers";
const USER_ADMINS = "select * from admins;";
//USER  Pages
const PROFESSOR_PROFILE_PAGE = "select * from professor_profile_page;";
const STUDENT_PROFILE_PAGE = "select * from student_profile_page";
const EMPLOYER_PROFILE_PAGE = "select * from employer_profile_page";
const COMPANY_LISTINGS = "select * from company_listings";
const PROJECTS = "select * from projects";

//Public Render Pages
const RENDER_PUBLIC_PROFILE =
  "select students.first_name, students.last_name, students.email,student_profile_page.about_me,student_profile_page.study_major,student_profile_page.grade_gpa,student_profile_page.student_id,student_profile_page.profile_image from students inner join student_profile_page on students.student_id = student_profile_page.student_id;";
//Search Querys

//Authenticate Querys

//Populate Querys w/ sign up/sign in pages

//Export
module.exports = {
  USER_STUDENTS,
  USER_PROFESSORS,
  USER_EMPLOYERS,
  USER_ADMINS,
  PROFESSOR_PROFILE_PAGE,
  STUDENT_PROFILE_PAGE,
  EMPLOYER_PROFILE_PAGE,
  COMPANY_LISTINGS,
  PROJECTS,
  RENDER_PUBLIC_PROFILE,
};
