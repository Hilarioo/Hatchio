/**
 * File: server.js
 * Purpose: Define HTTP Prototype Route definitions for web server.
 * Functionality IE: Handle Requests for Frontend to communicate writing and reading from database.
 * Authors: Aaron
 */
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const cookieparser = require("cookie-parser");
//MiddleWare: client request configuration
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "ec2_link_add_later"],
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "contentType",
      "Content-Type",
      "Accept",
      "Authorization",
    ],
  })
);
app.use(cookieparser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Backend UI Views for Database Tables (temporarily for dev)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});
// GET | POST  for Frontend UI Routes
require("./routes/tables")(app);
require("./routes/cards")(app);
require("./routes/users")(app);
require("./routes/verification")(app);
require("./routes/insert")(app);

app.listen(5000, () => `Backend-Live`);
