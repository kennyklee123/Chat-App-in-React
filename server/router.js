const express = require("express");
const router = express.Router();
//basic express shit
router.get("/", (req, res) => {
  res.send({ response: "Server is up and running." }).status(200);
});

module.exports = router;