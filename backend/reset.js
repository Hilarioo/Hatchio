const fs = require("fs");
const mysql = require("mysql");
const CONFIG = require("./config");
const db_connection = mysql.createConnection(CONFIG.SQL_PORT);
const rawSQL = fs.readFileSync("../database/reset.sql").toString();
const dataArr = rawSQL.toString().split(");");

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
