require("dotenv");
require('./database/index')
const express = require("express");
const app = express();
const userRoute = require('./Routes/user');



app.use(userRoute)

app.get("/", (req, res) => {
  res.send(console.log("Hello"));
});

// use port 3000 unless there exists a preconfigured port
var port = 3000;

app.listen(process.env.PORT || port, () => {
  console.log(`Server is up and running @ port ${port}`);
});
