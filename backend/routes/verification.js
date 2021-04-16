/**
 * File: verification.js
 * Purpose:
 * Functionality:
 * Authors: Roland
 */
var nodemailer = require("nodemailer");
const mysql = require("mysql");
const CONFIG = require("../config");
const db_connection = mysql.createConnection(CONFIG.SQL_PORT);

const profileSearch = (UserType, search_keyword) => {
  if ((UserType == "students") | (UserType == "professors")) {
    return `SELECT first_name,last_name,email,school_name,password,code FROM ${UserType} WHERE ( first_name LIKE '${search_keyword}' OR last_name LIKE '${search_keyword}' OR email LIKE '${search_keyword}' OR school_name LIKE '${search_keyword}'OR password LIKE '${search_keyword}'OR code LIKE '${search_keyword}' )`;
  }
  return `SELECT first_name,last_name,email,organization_name,password,code FROM ${UserType} WHERE ( first_name LIKE '${search_keyword}' OR last_name LIKE '${search_keyword}' OR email LIKE '${search_keyword}' OR organization_name LIKE '${search_keyword}'OR password LIKE '${search_keyword}'OR code LIKE '${search_keyword}' )`;
};

const updateKey = (UserType, key, value, search_keyword, value2) => {
  return `UPDATE ${UserType} SET ${key}='${value}' WHERE ${search_keyword}='${value2}'`;
};

//Create SMTP Transport
var smtpTransport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "hatchionoreply9",
    pass: "csctest0308123",
  },
});

var mailOptions, host, link;

module.exports = function (app) {
  app.get("/send", (req, res) => {
    const { email, code, UserType } = req.query;
    console.log("send function");
    console.log(UserType);
    host = req.get("host");
    link =
      "http://" +
      req.get("host") +
      "/verify?UserType=" +
      UserType +
      "&id=" +
      code;
    mailOptions = {
      to: email,
      subject: "Please confirm your Email account",
      html:
        "Hello,<br> Please Click on the link to verify your email.<br><a href=" +
        link +
        ">Click here to verify</a>",
    };
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function (error, response) {
      if (error) {
        console.log(error);
        res.end("error");
      } else {
        console.log("Message sent: " + response.message);
        res.end("sent");
      }
    });
  });

  app.get("/verify", function (req, res) {
    console.log(req.protocol + ":/" + req.get("host"));
    if (req.protocol + "://" + req.get("host") == "http://" + host) {
      console.log("Domain is matched. Information is from Authentic email");
      if (
        db_connection.query(profileSearch(req.query.UserType, req.query.id))
      ) {
        db_connection.query(
          updateKey(req.query.UserType, "state", 1, "code", req.query.id)
        ); //update status
        db_connection.query(
          updateKey(
            req.query.UserType,
            "code",
            "Not Assigned",
            "code",
            req.query.id
          )
        ); //remove code
        console.log("email is verified");
        res.end(
          "<h1>Email " + mailOptions.to + " is been Successfully verified"
        );
      } else {
        console.log("email is not verified");
        res.end("<h1>Bad Request</h1>");
      }
    } else {
      res.end("<h1>Request is from unknown source");
    }
  });
};
