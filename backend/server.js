const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const cookieparser = require("cookie-parser");
//MiddleWare
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
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Backend UI To View Database Tables
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});
app.get("/ec2", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/ec2.html"));
});
// GET | POST  for Frontend UI Routes
require("./routes/tables")(app);
require("./routes/cards")(app);
require("./routes/users")(app);
require("./routes/verification")(app);

app.listen(5000, () => `Backend-Live`);
