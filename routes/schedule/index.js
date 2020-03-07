const express = require("express");
const router = express.Router();
const controller = require("../../controller/schedule");

/* User create*/
router.post("/user/:userId", controller.create_schedule_by_userId_for_month);

/* Get create*/
router.get("/user/:userId/month/:month/year/:year", controller.get_schedule_by_date);

module.exports = router;
