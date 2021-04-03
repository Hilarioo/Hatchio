const fs = require("fs");
const mysql = require("mysql");
const CONFIG = require("../../configuration/config");
const db_connection = mysql.createConnection(CONFIG.SQL_PORT);

const dataSql = fs.readFileSync("./reset.sql").toString();
console.log(dataSql);
const dataArr = dataSql.toString().split(");");

dataArr.forEach((query) => {
  if (query) {
    query += ");";
    db_connection.query(query, (err, results) => {
      if (err) {
        throw err;
      } else {
        console.log(results);
      }
    });
  }
});
