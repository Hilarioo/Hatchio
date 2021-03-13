//Return All
const PROFILE_PAGES = "SELECT * FROM ProfilePages";

//Register User
const registerUser = (
  first_name,
  last_name,
  email,
  password,
  student,
  professor,
  employer,
  school_name,
  company_name
) => {
  return `INSERT INTO ProfilePages(first_name,last_name,email,password,register_date,student,professor,employer,school_name,company_name) values ('${first_name}','${last_name}','${email}','${password}',now(),${student},${professor},${employer},'${school_name}','${company_name}')`;
};
//Search Profile
const profileSearch = (search_keyword) => {
  const query_string = `SELECT first_name,last_name,email,school_name,company_name,location FROM ProfilePages WHERE( first_name LIKE '${search_keyword}' OR last_name LIKE '${search_keyword}' OR company_name LIKE '${search_keyword}' OR school_name LIKE '${search_keyword}'OR location LIKE '${search_keyword}' )`;
  const studentReturn = `SELECT first_name,last_name,email,school_name,company_name,student FROM ProfilePages WHERE( first_name LIKE '${search_keyword}' OR last_name LIKE '${search_keyword}' OR company_name LIKE '${search_keyword}' OR school_name LIKE '${search_keyword}' OR student LIKE '${1}')`;
  const professorReturn = `SELECT first_name,last_name,email,school_name,company_name,professor FROM ProfilePages WHERE( first_name LIKE '${search_keyword}' OR last_name LIKE '${search_keyword}' OR company_name LIKE '${search_keyword}' OR school_name LIKE '${search_keyword}' OR professor LIKE '${1}')`;
  const employerReturn = `SELECT first_name,last_name,email,school_name,company_name,employer FROM ProfilePages WHERE( first_name LIKE '${search_keyword}' OR last_name LIKE '${search_keyword}' OR company_name LIKE '${search_keyword}' OR school_name LIKE '${search_keyword}' OR employer LIKE '${1}')`;
  if (search_keyword === "students") {
    return studentReturn;
  }
  if (search_keyword === "professors") {
    return professorReturn;
  }
  if (search_keyword === "employers") {
    return employerReturn;
  }
  //Return all if Empty String
  if (search_keyword === "") {
    return PROFILE_PAGES;
  }
  return query_string;
};

//Export
module.exports = {
  PROFILE_PAGES,
  registerUser,
  profileSearch,
};
