const express = require("express");
const router = express.Router();

const controller = require("../controllers/pocker");

router.post("/pocker", controller.pocker.sum);
router.post("/clock", controller.clock.onepatient);
router.post("/sub", controller.substring.sub);

module.exports = router;
