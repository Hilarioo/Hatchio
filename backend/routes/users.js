const mysql = require("mysql");
const CONFIG = require("../config");
const db_connection = mysql.createConnection(CONFIG.SQL_PORT);
const SQL_QUERY_USER = require("../mysql/users");
const SQL_QUERY_POST = require("../mysql/rate");
const SQL_QUERY = require("../mysql/userauth");

module.exports = function (app) {
  //JSON Students
  app.get("/students", (req, res) => {
    db_connection.query(SQL_QUERY_USER.USER_STUDENTS, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json(results);
      }
    });
  });
  //JSON Professors
  app.get("/professors", (req, res) => {
    db_connection.query(SQL_QUERY_USER.USER_PROFESSORS, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json(results);
      }
    });
  });
  //JSON Employers
  app.get("/employers", (req, res) => {
    db_connection.query(SQL_QUERY_USER.USER_EMPLOYERS, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        res.json(results);
      }
    });
  });
  //JSON Admins
  app.get("/admins", (req, res) => {
    db_connection.query(SQL_QUERY_USER.USER_ADMINS, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        res.json(results);
      }
    });
  });

  //Register USER
  app.get("/register", (req, res) => {
    const {
      UserType,
      first_name,
      last_name,
      password,
      email,
      school_name,
      code,
    } = req.query;
    //    console.log(req.query);
    db_connection.query(
      SQL_QUERY.USER_SIGN_UP(
        UserType,
        first_name,
        last_name,
        school_name,
        password,
        email,
        code
      ),
      (err, results) => {
        if (err) {
          console.log(`query-add-fail ${JSON.stringify(err)}`);
          return;
        } else {
          console.log(`query-add-success ${JSON.stringify(results)} `);
          return;
        }
      }
    );
    res.send("profile-added");
  });
  //Verify User and Store Browser Cookie
  app.get("/sign_in", (req, res) => {
    const { Email, Password, Type } = req.query;
    const Query_Verify = `select x.${Type}_id,x.first_name from ${Type}s x where email="${Email}" and password="${Password}";`;
    db_connection.query(Query_Verify, (err, results) => {
      if (err) {
        res.send(false);
      } else {
        try {
          var tmpo = [];
          for (key in results[0]) {
            tmpo.push(key);
          }
          res.cookie("Type_User", Type);
          res.cookie("ID_OF_USER", results[0][tmpo[0]]);
          res.cookie("First_Name", results[0][tmpo[1]]);
          res.send(true);
        } catch (e) {
          res.send(false);
        }
      }
    });
  });
  //Get User Profile
  app.get("/profile", (req, res) => {
    const { ts, bs } = req.query;
    db_connection.query(SQL_QUERY_USER.USER_PROFILE(ts, bs), (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json(results);
      }
    });
  });
  // Insert Student Rating TODO: POST METHOD
  app.get("/rate_student", (req, res) => {
    const {
      s_id,
      p_id,
      res_int,
      tea_int,
      lead_int,
      cts_int,
      res_string,
      rt_total,
    } = req.query;
    db_connection.query(
      SQL_QUERY_POST.PROFESSOR_RATE_STUDENT(
        s_id,
        p_id,
        res_int,
        tea_int,
        lead_int,
        cts_int,
        res_string,
        rt_total
      ),
      (err, results) => {
        if (err) {
          res.send(false);
        } else {
          //console.log(results);
          res.send(true);
        }
      }
    );
  });
};
