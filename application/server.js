const express = require("express");
const mysql = require("mysql");
const app = express();
var nodemailer = require("nodemailer");
const cors = require("cors");

const { port_mysql } = require("./config");
const { registerUser, profileSearch, jobSearch, deleteUser, PROFILE_PAGES, JOB_LISTINGS } = require("./mysql");

app.use(cors());

//DB Authentication
const db_connection = mysql.createConnection(port_mysql);

//DB On Connection
db_connection.connect((err) => {
  if (err) {
    console.log(`error invoked: ${err}`);
    return err;
  } else {
    console.log("connection-paired");
  }
});

//Root Page
app.get("/", (req, res) => {
  res.send("BackEnd-Express-Server-Root-Page");
});

//JSON Profile Pages
app.get("/profilepages", (req, res) => {
  db_connection.query(PROFILE_PAGES, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(results);
    }
  });
});
//Json Job Listings
app.get("/joblistings", (req, res) => {
  db_connection.query(JOB_LISTINGS, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        JobListingsTable: results,
      });
    }
  });
});
//Add Profile
app.get("/register", (req, res) => {
  const { first_name, last_name, password, email, school_name, student, professor, employer, company_name, code } = req.query;
  console.log(req.query);
  db_connection.query(
    registerUser(first_name, last_name, email, password, student, professor, employer, school_name, company_name, code),
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
//Search Profiles
app.get("/search/profiles", (req, res) => {
  const { keyword } = req.query;
  console.log(req.query);
  db_connection.query(profileSearch(keyword), (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(results);
    }
  });
});
//Search Job Listings
app.get("/search/joblistings", (req, res) => {
  const { keyword, miles } = req.query;
  console.log(req.query);
  db_connection.query(jobSearch(keyword, miles), (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        JobListings_Search_Results: results,
      });
    }
  });
});

//Create SMTP Transport
var smtpTransport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
      user: "hatchionoreply9",
      pass: "csctest0308123"
  }
});

var mailOptions,host,link,rand;

app.get('/send', (req,res) => {
  const {email, code} = req.query;
host=req.get('host');
link="http://"+req.get('host')+"/verify?id="+code;
mailOptions={
to : email,
subject : "Please confirm your Email account",
html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>"	
}
console.log(mailOptions);
smtpTransport.sendMail(mailOptions, function(error, response){
if(error){
    console.log(error);
res.end("error");
}else{
    console.log("Message sent: " + response.message);
res.end("sent");
 }
});
});

/*
app.get('/verify',function(req,res){
console.log(req.protocol+":/"+req.get('host'));
if((req.protocol+"://"+req.get('host'))==("http://"+host))
{
console.log("Domain is matched. Information is from Authentic email");
if(req.query.id==rand)
{
console.log("email is verified");
res.end("<h1>Email "+mailOptions.to+" is been Successfully verified");
}
else
{
console.log("email is not verified");
res.end("<h1>Bad Request</h1>");
}
}
else
{
res.end("<h1>Request is from unknown source");
}
});
*/
app.listen(5000, () => `Backend-Live`);
