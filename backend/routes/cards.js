/**
 * File: cards.js
 * Purpose: Get data from SQL database node_hatchio_db to serve on the frontend for search pages
 * Functionality IE: Fetch request with the frontend under search/jobs | search/students page
 * Author:Aaron
 */
const mysql = require("mysql");
const CONFIG = require("../config");
const SQL_QUERY = require("../mysql/cards");
const SQL_FILTER = require("../mysql/filters");
const db_connection = mysql.createConnection(CONFIG.SQL_PORT);

module.exports = (app) => {
  //Student Cards Preload
  app.get("/student_cards", (req, res) => {
    try {
      db_connection.query(SQL_QUERY.API_STUDENT_CARD, (err, results) => {
        if (err) {
          console.log(SQL_QUERY.API_STUDENT_CARD);
          return res.send(err);
        } else {
          //Time out
          return res.json(results);
        }
      });
    } catch (e) {
      console.log(`Error ${e}`);
      return res.sendStatus(400);
    }
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
