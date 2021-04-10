const fs = require("fs");
const mysql = require("../backend/node_modules/mysql");
const CONFIG = require("../backend/config");
const db_connection = mysql.createConnection(CONFIG.SQL_PORT);
const rawSQL = fs.readFileSync("../database/reset.sql").toString();
const dataArr = rawSQL.toString().split("\n");

for (var index = 0; index < dataArr.length - 1; index++) {
  db_connection.query(dataArr[index], (err, results) => {});
}
db_connection.end();
