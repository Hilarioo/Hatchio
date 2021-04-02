const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

require("./routes/users")(app);
require("./routes/profiles")(app);
require("./routes/cards")(app);

app.listen(5000, () => `Backend-Live`);
