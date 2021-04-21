//Sign Up User
const USER_SIGN_UP = function(db, query, callback) {
  switch (query.UserType) {
    case "students":
      db.query('insert into students(first_name, last_name, school_name, password, email, state, code) values (?,?,?,?,?,0,?);',
               [query.FirstName, query.LastName, query.schoolname, query.Password, query.Email, query.code], callback);
      break;
    case "professors":
      db.query('insert into professors(first_name, last_name, school_name, password, email, state, code) values (?,?,?,?,?,0,?);',
               [query.FirstName, query.LastName, query.schoolname, query.Password, query.Email, query.code], callback);
      break;
    case "employers":
      db.query('insert into employers(first_name, last_name, organization_name, password, email, state, code) values (?,?,?,?,?,0,?);',
               [query.FirstName, query.LastName, query.schoolname, query.Password, query.Email, query.code], callback);
      break;
  }
};

module.exports = {
  USER_SIGN_UP,
};
