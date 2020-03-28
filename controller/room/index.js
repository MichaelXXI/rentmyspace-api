const mongoose = require("mongoose");

const Room = require("../../entity/room");
const Booking = require("../../entity/booking");
const User = require("../../entity/user");

exports.create_room_by_userId = (req, res, next) => {
  const { userId, body } = req;

  (async () => {
    try {
      await User.findById(userId).orFail();

      const room = await Room.create({
        _id: new mongoose.Types.ObjectId(),
        ...body
      })

      res.status(200).json(room);
    } catch (err) {
      next(err);
    }
  })();
};

exports.get_room_by_id = (req, res) => {
  const { roomId } = req.params;

  (async () => {
    try {
      const room = await Room.findById(roomId);
      if (!room) return res.sendStatus(404);
      res.status(200).json(room);
    } catch (err) {
      next(err);
    }
  })();
};
// to do
exports.update_room_by_id = (req, res) => {
  const { roomId, body } = req;

  (async () => {
    try {
      const room = await Room.findById(roomId);
      if (!room) return res.sendStatus(404);

      res.status(200).json(room);
    } catch (err) {
      next(err);
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
    startDateFrom,
    duration,
    type,
    additional,
    areaFrom,
    areaTo,
    capacityFrom,
    capacityTo
  } = req.query;

  (async () => {
    try {
      const bookings = await Booking.find();

      const rooms = await Room.find({ $nin: bookings }).and(
        startDateFrom ? { startDate: { $gte: startDateFrom } } : {},
        duration ? { endDate: { $gte: startDateFrom } } : {},
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
