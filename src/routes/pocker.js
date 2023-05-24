const express = require("express");
const router = express.Router();

const controller = require("../controllers/pocker");

router.post("/pocker/sum", controller.pocker.sum);
router.post("/pocker/delete", controller.pocker.delete);

module.exports = router;
