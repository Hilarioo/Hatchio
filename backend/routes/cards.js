const mysql = require("mysql");
const CONFIG = require("../config");
const SQL_QUERY = require("../mysql/cards");
const SQL_FILTER = require("../mysql/filters");
const db_connection = mysql.createConnection(CONFIG.SQL_PORT);

module.exports = function (app) {
  //Student Cards Preload
  app.get("/student_cards", (req, res) => {
    db_connection.query(SQL_QUERY.API_STUDENT_CARD, (err, results) => {
      if (err) {
        console.log(SQL_QUERY.API_STUDENT_CARD);
        return res.send(err);
      } else {
        return res.json(results);
      }
    });
  });
  //Job Cards Preload
  app.get("/job_cards", (req, res) => {
    db_connection.query(SQL_QUERY.API_JOB_CARD, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json(results);
      }
    });
  });
  // Filter Job Cards
  app.get("/filter_job_cards", (req, res) => {
    const { job_type, position_title } = req.query;
    console.log(job_type, position_title);
    db_connection.query(
      SQL_FILTER.API_JOB_CARD_FILTER(job_type, position_title),
      (err, results) => {
        if (err) {
          return res.send(err);
        } else {
          return res.json(results);
        }
      }
    );
  });
};
