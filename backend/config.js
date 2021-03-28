//localmachine_cred
const local_mysql_credentials = {
  host: "localhost",
  user: "guest",
  password: "jkLive586!@",
  database: "acme",
};

//aws_cred
const aws_mysql_credentials = {
  host: "localhost",
  user: "myroot",
  password: "goose10",
  insecureAuth: "true",
  database: "acme",
  multipleStatements: true,
};
const dev_mysql = (localmachine) => {
  return localmachine ? local_mysql_credentials : aws_mysql_credentials;
};

const port_mysql = dev_mysql(true);

module.exports = {
  port_mysql,
};
