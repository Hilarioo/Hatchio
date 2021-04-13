const PROFESSOR_RATE_STUDENT = (
  s_id,
  p_id,
  res_int,
  tea_int,
  lead_int,
  cts_int,
  res_string,
  rt_total
) => {
  return `insert into student_ratings (student_id,professor_id,responsible_level,team_work_level,leadership_level,committed_to_success_level,recommendation_comment,rating_total) values (${s_id},${p_id},${res_int},${tea_int},${lead_int},${cts_int},"${res_string}",${rt_total});`;
};

module.exports = {
  PROFESSOR_RATE_STUDENT,
};
