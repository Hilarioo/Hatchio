const API_STUDENT_CARD = `
SELECT Distinct
    students.student_id,
    students.first_name,
    students.last_name,
    student_education.study_major,
    student_education.school_gpa,
    student_education.start_year,
    student_education.school,
    student_profile_page.about_me,
    student_profile_page.profile_image,
    student_profile_page.school_grade_level,
    strengths_qualities,
    student_ratings.rating_total
FROM
    students
        JOIN
    student_profile_page ON students.student_id = student_profile_page.student_id
        JOIN
    student_education ON students.student_id = student_education.student_id
     left join
    student_ratings ON students.student_id = student_ratings.student_id;
    ;
`;
// STILL_WORKING_ON

const API_JOB_CARD =
  "select c_l.position_title,c_l.organization_name,c_l.salary,c_l.location,c_l.about_us,job_type  from company_listings c_l";

module.exports = {
  API_STUDENT_CARD,
  API_JOB_CARD,
};
