const express = require("express");
const router = express.Router();

const controller = require("../controllers/pocker");

router.post("/pocker/sum", controller.pocker.sum);
router.post("/clock", controller.clock.onepatient);

module.exports = router;
