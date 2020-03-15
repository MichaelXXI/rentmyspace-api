const Room = require("../../entity/room");
const Schedule = require("../../entity/schedule");
const User = require("../../entity/user");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

exports.create_room_by_userId = (req, res) => {
  const { scheduleId, userId } = req.params;
  const { description, images, price, conditions } = req.body;
  debugger;
  (async () => {
    try {
      const user = await User.findById(userId);
      if (!user) return res.sendStatus(404);

      const booking = await new Booking({
        _id: new mongoose.Types.ObjectId(),
        userId,
        description,
        images,
        price,
        conditions
      }).save();

      schedule[day].push({ bookingId: booking.id });

      await schedule.save();

      res.status(200).json({ schedule });
    } catch (err) {
      res.sendStatus(400);
    }
  })();
};

exports.get_room_by_id = (req, res) => {
  const { description, images, price, conditions } = req.body;

  (async () => {
    try {
      const room = await Room.findById(roomId);
      if (!room) return res.sendStatus(404);
      res.status(200).json(room);
    } catch (err) {
      res.sendStatus(400);
    }
  })();
};

exports.update_room_by_id = (req, res) => {
  const { roomId } = req;

  (async () => {
    try {
      const room = await Room.findById(roomId);
      if (!room) return res.sendStatus(404);
      res.status(200).json(room);
    } catch (err) {
      res.sendStatus(400);
    }
  })();
};

exports.get_room_by_id = (req, res) => {
  const { roomId } = req;

  (async () => {
    try {
      const room = await Room.findById(roomId);
      if (!room) return res.sendStatus(404);
      res.status(200).json(room);
    } catch (err) {
      res.sendStatus(400);
    }
  })();
};

exports.get_room_by_userId = (req, res) => {
  const { userId } = req;

  (async () => {
    try {
      const rooms = await Room.find({ userId });
      if (!rooms) return res.sendStatus(500);
      if (rooms.length < 1) return res.sendStatus(404);
      res.status(200).json(rooms);
    } catch (err) {
      res.sendStatus(400);
    }
  })();
};

exports.get_rooms_filtered = (req, res) => {
  const {
    dateFrom,
    dateTo,
    type,
    additional,
    areaFrom,
    areaTo,
    capacityFrom,
    capacityTo
  } = req.query;
  debugger
  (async () => {
    try {
      const rooms = await Room.find().and(
        dateFrom ? {} : {},
        dateTo ? {} : {},
        type ? {} : {},
        additional ? {} : {},
        areaFrom ? {} : {},
        areaTo ? {} : {},
        capacityFrom ? {} : {},
        capacityTo ? {} : {}
      );



      if (!rooms) return res.sendStatus(500);
      res.status(200).json(rooms);
    } catch (err) {
      res.sendStatus(400);
    }
  })();
};
