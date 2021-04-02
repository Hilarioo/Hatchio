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
  db.query("INSERT INTO ProfilePages(first_name,last_name,email,password,salt,register_date,student,professor,employer,school_name,company_name) values(?,?,?,?,?,now(),?,?,?,?,?);",
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

//Export
module.exports = {
  profilePages,
  jobListings,
  registerUser,
  profileSearch,
  jobSearch,
};
