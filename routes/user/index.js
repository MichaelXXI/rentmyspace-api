const express = require("express");
const router = express.Router();
const controller = require("../../controller/user");

/* User create*/
router.post("/", controller.create_user);

module.exports = router;
