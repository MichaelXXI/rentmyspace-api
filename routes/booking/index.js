const express = require("express");
const router = express.Router();
const controller = require("../../controller/booking");

/* User create*/
router.post("/schedule/:scheduleId/user/:userId", controller.create_booking);

module.exports = router;
