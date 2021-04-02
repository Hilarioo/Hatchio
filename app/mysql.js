var crypto = require("crypto")

//Register User
const registerUser = (q, db, callback) => {
  if (!q.email || !q.password || !q.password.length || q.password.length < 8 || (!q.school_name && !q.company_name)) {
    callback({message: "missing field"}, null);
    return;
  }
  if (!((q.student === 1 && q.professor === 0 && q.employer === 0) ||
        (q.student === 0 && q.professor === 1 && q.employer === 0) ||
        (q.student === 0 && q.professor === 0 && q.employer === 1))) {
    callback({message: "no profile type"}, null);
    return;
  }
  var salt = crypto.randomBytes(16).toString("hex");
  var hash = crypto.createHash("sha256");
  hash.update(q.password + salt);
  // TODO @anyone working on client: use methods which escape HTML in user strings
  db.query("INSERT INTO ProfilePages(first_name,last_name,email,password,salt,register_date,student,professor,employer,school_name,company_name) VALUES(?,?,?,?,?,now(),?,?,?,?,?);",
           [q.first_name, q.last_name, q.email, hash.digest("hex"), salt, q.student, q.professor, q.employer, q.school_name, q.company_name], callback);
};

//Search Profile
const profileSearch = (search_keyword, db, callback) => {
  var is_student = search_keyword === "students" ? 1 : 0;
  var is_professor = search_keyword === "professors" ? 1 : 0;
  var is_employer = search_keyword === "employers" ? 1 : 0;
  const query_string = "SELECT first_name, last_name, email, school_name, company_name, location, student, professor, employer FROM ProfilePages";
  const query_filter = " WHERE (first_name LIKE ? OR last_name LIKE ? OR company_name LIKE ? OR school_name LIKE ? OR location LIKE ?) OR (student=? AND professor=? AND employer=?);";
  if (search_keyword === "") {
    db.query(query_string + ";", [], callback);
  } else {
    db.query(query_string + query_filter, [search_keyword, search_keyword, search_keyword, search_keyword, search_keyword, is_student, is_professor, is_employer], callback);
  }
};

//Search Jobs
const jobSearch = (query, db, callback) => {
  if (q.search_keyword === "" /*&& q.miles_range === "null"*/) {
    jobListings(null, db, callback);
    return;
  }
  const query_string = "SELECT * FROM JobListings";
  // TODO It's fine if these are exact matches but if so the options MUST be discretized into an enum
  const query_filter = " WHERE (position_title LIKE ? OR employment_type=? OR experience_levels=? OR salary=? OR location LIKE ?);";
  // TODO This isn't how a distance filter works. It isn't a global absolute; users live in different places. We would
  // need to store the lat/lon or other absolute measure and filter based on a mathematical equation.
  /*if (miles_range === "null") {
    return `SELECT * FROM JobListings WHERE (position_title LIKE '%${search_keyword}%' OR employment_type='%${search_keyword}%' OR experience_level='%${search_keyword}%'OR salary='%${search_keyword}%' OR location='%${search_keyword}%' OR employer_organization='%${search_keyword}%') `;
  }
  return `SELECT * FROM JobListings WHERE (position_title LIKE '%${search_keyword}%' OR employment_type='%${search_keyword}%' OR experience_level='%${search_keyword}%'OR salary='%${search_keyword}%' OR location='%${search_keyword}%' OR employer_organization='%${search_keyword}%') AND (miles_range <= ${miles_range}) `;*/
  if (q.search_keyword === "" /*&& q.miles_range === "null"*/) {
    db.query(query_string + ";", [], callback);
  } else {
    db.query(query_string + query_filter, [q.search_keyword, q.search_keyword, q.search_keyword, q.search_keyword, q.search_keyword], callback);
  }
};

//Return All
const profilePages = (query, db, callback) => {
  profileSearch("", db, callback);
};
const jobListings = (query, db, callback) => {
  jobSearch({ search_keyword: "" }, db, callback);
};

// Review
const MIN_REVIEW_SCORE = 1;
const MAX_REVIEW_SCORE = 5;
const AVG_REVIEW_SCORE = (MIN_REVIEW_SCORE + MAX_REVIEW_SCORE) / 2;
const requestReview = (query, db, callback) => {
  // TODO authenticate
  db.query("INSERT INTO Reviews (student_id, professor_id) SELECT ?, ? WHERE NOT EXISTS (SELECT * FROM Reviews WHERE student_id=? and professor_id=?);",
           [query.student, query.professor, query.student, query.professor], callback);
};
const fillReview = (query, db, callback) => {
  // TODO authenticate
  const bounds = (x) => { return Math.round(Math.max(1, Math.min(5, x))); };
  var comm = bounds(query.communication);
  var tech = bounds(query.technical_ability);
  var ini = bounds(query.initiative);
  var org = bounds(query.organization);
  const query_string = "UPDATE Reviews set communication=?, technical_ability=?, initiative=?, organization=?, comments=? WHERE student_id=? AND professor_id=?; " +
      "UPDATE Students s JOIN (SELECT AVG(communication) AS avg_comm, AVG(technical_ability) AS avg_tech, AVG(initiative) AS avg_ini, AVG(organization) AS avg_org, " +
      "student_id, COUNT(id)-2 AS n FROM Review WHERE student_id=?) r ON s.id=r.student_id " +
      "SET s.skill_comm=r.avg_comm, s.skill_tech=r.avg_tech, s.skill_ini=r.avg_ini, s.skill_org=r.avg_org, s.num_reviews=r.n;";
  db.query(query_string, [comm, tech, ini, org, q.comments, q.student, q.professor, q.student], callback);
};
const talentSearch = (query, db, callback) => {
  const order = "skill_comm * ? + skill_tech * ? + skill_ini * ? + skill_org * ?";
  const query_string = "SELECT id, name, skill_comm, skill_tech, skill_ini, skill_org, (" + order + ") FROM Students ORDER BY (" + order + ") DESC;";
  var weights = [query.weight_comm, query.weight_tech, query.weight_ini, query.weight_org];
  db.query(query_string, weights.concat(weights), callback);
};
// TODO this will be called upon the creation of a student account to ensure
// that average abilities obey statistical principals. Any account with the
// email address 'bot' is a dummy account and may not be logged into.
const intrinsicReview = (student_id, db, callback) => {
  const half_review_string = "INSERT INTO Reviews (student_id, professor_id, communication, technical_ability, initiative, organization) " +
    "VALUES (?, (SELECT id FROM Professors WHERE name=? and email_addr='bot'), ?, ?, ?, ?); ";
  const score_string = "UPDATE Students SET skill_comm=?, skill_tech=?, skill_ini=?, skill_org=?, num_reviews=0;";
  var scores = [student_id, "Laplace-Bot", AVG_REVIEW_SCORE, AVG_REVIEW_SCORE, AVG_REVIEW_SCORE, AVG_REVIEW_SCORE,
      student_id, "Bayes-Bot", AVG_REVIEW_SCORE, AVG_REVIEW_SCORE, AVG_REVIEW_SCORE, AVG_REVIEW_SCORE,
      AVG_REVIEW_SCORE, AVG_REVIEW_SCORE, AVG_REVIEW_SCORE, AVG_REVIEW_SCORE];
  db.query(half_review_string + half_review_string + score_string, scores, callback);
};

//Export
module.exports = {
  profilePages,
  jobListings,
  registerUser,
  profileSearch,
  jobSearch,
  requestReview,
  fillReview,
  talentSearch
};
