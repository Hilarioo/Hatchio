const mysql = require("mysql");
const CONFIG = require("../../configuration/config");
const db_connection = mysql.createConnection(CONFIG.SQL_PORT);
const COMPANY_LISTINGS = "select * from company_listings";
//DB On Connection
db_connection.connect((err) => {
  if (err) {
    console.log(`error invoked: ${err}`);
    return err;
  } else {
    console.log("connection-paired");
  }
});
module.exports = function (app) {
  //JSON Company Listings Pages
  app.get("/joblistings", (req, res) => {
    db_connection.query(COMPANY_LISTINGS, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        res.json(results);
      }
    });
  });
};
