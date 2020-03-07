const Schedule = require("../../entity/schedule");
const User = require("../../entity/user");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

exports.create_schedule_by_userId_for_month = (req, res) => {
  const { userId } = req.params;
  const { month, year } = req.body;

  (async () => {
    try {
      const user = await User.findById(userId);
      if (!user) return res.sendStatus(404);

      const existing_schedule = await Schedule.find({ userId, month, year });
      if (!existing_schedule) return res.sendStatus(500);
      if (existing_schedule.length > 0) return res.sendStatus(409);

      const schedule = await new Schedule({
        _id: new mongoose.Types.ObjectId(),
        userId,
        month,
        year
      }).save();

      res.status(200).json({ id: schedule.id });
    } catch (err) {
      res.sendStatus(400);
    }
  })();
};

exports.get_schedule_by_date = (req, res) => {
  const { userId, month, year } = req.params;
  debugger;
  (async () => {
    try {
      const schedule = await Schedule.findOne({ userId, month, year }).populate(
        "1.bookingId 2.bookingId 3.bookingId 4.bookingId 5.bookingId 6.bookingId 7.bookingId 8.bookingId 9.bookingId 10.bookingId 11.bookingId 12.bookingId 13.bookingId 14.bookingId 15.bookingId 16.bookingId 17.bookingId 18.bookingId 19.bookingId 20.bookingId 21.bookingId 22.bookingId 23.bookingId 24.bookingId 25.bookingId 26.bookingId 27.bookingId 28.bookingId 29.bookingId 30.bookingId 31.bookingId"
      );
      if (!schedule) return res.sendStatus(404);
      res.status(200).json(schedule);
    } catch (err) {
      res.sendStatus(400);
    }
  })();
};
