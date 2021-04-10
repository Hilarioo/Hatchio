//Sign Up User
const USER_SIGN_UP = (
  UserType,
  FirstName,
  LastName,
  schoolname,
  Password,
  Email,
  code
) => {
  if ((UserType == "students") | (UserType == "professors")) {
    return `insert into ${UserType}(first_name,last_name,school_name,password,email,state,code) values ("${FirstName}","${LastName}","${schoolname}","${Password}","${Email}",0,"${code}");`;
  }
  if (UserType == "employers") {
    return `insert into ${UserType}(first_name,last_name,organization_name,password,email,state,code) values ("${FirstName}","${LastName}","${schoolname}","${Password}","${Email}",0,"${code}");`;
  }
};

module.exports = {
  USER_SIGN_UP,
};
