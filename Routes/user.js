const express = require("express");
const router = express.Router();

router.get("/user", async (req, res, next) => {
  res.send(console.log("hello from user"));
  next();
});

module.exports = router;
