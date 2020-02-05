const express = require("express");
const app = express();
require("dotenv");
require('./database/index')

app.get("/", (req, res) => {
  res.send(console.log("Hello"));
});

// use port 3000 unless there exists a preconfigured port
var port = 3000;

app.listen(process.env.PORT || port, () => {
  console.log(`Server is up and running @ port ${port}`);
});
