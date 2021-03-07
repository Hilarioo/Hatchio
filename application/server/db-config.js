//MYSQL_Credentials
const mysql_credentials = {
  host: "localhost",
  user: "guest",
  password: "",
  database: "acme",
};

const aws_mysql_credentials = {
  host: "localhost",
  user: "myroot",
  password: "goose10",
  insecureAuth: "true",
  database: "acme",
  multipleStatements: true,
};

//Display Users
const displayUsers = "SELECT * FROM users";
//Register User
const registerUser = (email, password) => {
  return `INSERT INTO users (email, password, register_date) values ('${email}', '${password}', now());`;
};
//Authenticate User
const authenticateUser = (email, password) => {
  return `SELECT * FROM users WHERE email='${email}' AND password='${password}';`;
};
module.exports = { aws_mysql_credentials, mysql_credentials, displayUsers, registerUser, authenticateUser };
