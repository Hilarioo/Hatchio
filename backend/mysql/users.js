const USER_STUDENTS = "select * from students";
const USER_PROFESSORS = "select * from professors";
const USER_EMPLOYERS = "select * from employers";
const USER_ADMINS = "select * from admins;";
const USER_PROFILE = (table, id) => {
  if (table == "student") {
    //Return Student Education, Student Ratings, Student Projects, Student Profile
    return `select se.school,se.degree,se.school_gpa,se.study_major,se.start_year,se.end_year from student_education se where se.student_id = ${id};
select sp.about_me, sp.strengths_qualities, sp.location, sp.school_grade_level, sp.resume, sp.profile_image from student_profile_page sp where sp.student_id=${id};  #profile
select sp.project_name,sp.summary,sp.arr_tools_used,sp.professor, sp.links_website, sp.arr_collaborators_arr from student_projects sp where sp.student_id=${id}; #projects
select student_id,p.first_name,p.last_name,p.school_name,sr.responsible_level,sr.team_work_level,sr.leadership_level,sr.committed_to_success_level,sr.recommendation_comment,sr.rating_total from student_ratings sr inner join professors p on sr.professor_id = p.professor_id where sr.student_id = ${id};
`;
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
