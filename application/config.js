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

module.exports = {
  aws_mysql_credentials,
  mysql_credentials,
};
