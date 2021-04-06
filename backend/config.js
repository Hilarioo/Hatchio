const MYSQL_CRED = [
  //AWS EC2 Instance
  {
    host: "localhost",
    user: "myroot",
    password: "goose10",
    insecureAuth: "true",
    database: "acme",
    multipleStatements: true,
  },
  //Aaron
  {
    host: "localhost",
    user: "guest",
    password: "jkLive586!@",
    insecureAuth: "true",
    database: "acme",
    multipleStatements: true,
  },
  //Jose
  {
    host: "localhost",
    user: "root",
    password: "12345",
    insecureAuth: "true",
    database: "acme",
    multipleStatements: true,
  },
  //Roland
  {
    host: "localhost",
    user: "root",
    password: "roland0308",
    database: "acme",
  },
  //Lyra
  {},
];
const AWS_PORT = `http://3.141.216.125:5000`;
const LOCAL_PORT = `http://localhost:5000`;
const HOST_PORT = LOCAL_PORT;
const SQL_PORT = MYSQL_CRED[1];

module.exports = {
  SQL_PORT,
  HOST_PORT,
};
