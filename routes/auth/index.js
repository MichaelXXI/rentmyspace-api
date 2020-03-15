const express = require("express");
const router = express.Router();
const controller = require("../../controller/auth");

/* User create*/
router.post("/", controller.user_authentication);

module.exports = router;
