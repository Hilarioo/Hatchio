const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const cookieparser = require("cookie-parser");
//MiddleWare
app.use(cors());
app.use(cookieparser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//UI Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});
app.get("/ec2", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/ec2.html"));
});
//More Routes
require("./routes/users")(app);
require("./routes/cards")(app);
require("./routes/verification")(app);

app.listen(5000, () => `Backend-Live`);
