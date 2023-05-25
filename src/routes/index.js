const express = require("express");
const router = express.Router();

router.use("/", require("./pocker"));

module.exports = router;
