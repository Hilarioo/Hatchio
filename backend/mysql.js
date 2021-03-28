//User Tables
const USER_STUDENTS = "select * from students";
const USER_PROFESSORS = "select * from professors";
const USER_EMPLOYERS = "select * from employers";
const USER_ADMINS = "select * from admins;";
//USER Public Pages
const PROFESSOR_PROFILE_PAGE = "select * from professor_profile_page;";
const STUDENT_PROFILE_PAGE = "select * from student_profile_page";
const EMPLOYER_PROFILE_PAGE = "select * from employer_profile_page";
const COMPANY_LISTINGS = "select * from company_listings";
const PROJECTS = "select * from projects";

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
};
