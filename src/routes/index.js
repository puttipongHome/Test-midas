const express = require("express");
const router = express.Router();

router.use("/", require("../routes/pocker"));

module.exports = router;
