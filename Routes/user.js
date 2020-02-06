const express = require("express");
const router = express.Router();
const user = require('../Schema/userSchema')

router.get("/user", async (req, res, next) => {
  res.send(console.log("hello from user"));
  next();
});

router.post('/')

module.exports = router;
