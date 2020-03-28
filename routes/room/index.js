const express = require("express");
const router = express.Router();
const controller = require("../../controller/room");
const authOne = require("../../midleware/auth_one");
const errorHandler = require("../../midleware/error_handler");

/* Create a room by userId */
router.post("/", authOne, controller.create_room_by_userId, errorHandler);

module.exports = router;
