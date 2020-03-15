const express = require("express");
const router = express.Router();
const controller = require("../../controller/room");

/* Get rooms filtered */
router.get("/", controller.get_rooms_filtered);

module.exports = router;
