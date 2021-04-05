const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});

require("./routes/users")(app);
require("./routes/cards")(app);
require("./routes/verification")(app);

app.listen(5000, () => `Backend-Live`);
