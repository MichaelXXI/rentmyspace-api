const Booking = require("../../entity/booking");
const Schedule = require("../../entity/schedule");
const User = require("../../entity/user");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

exports.create_booking = (req, res) => {
  const { scheduleId, userId } = req.params;
  const { day, from, to, description, conditions } = req.body;
  debugger;
  (async () => {
    try {
      const user = await User.findById(userId);
      if (!user) return res.sendStatus(404);
      debugger;
      const schedule = await Schedule.findById(scheduleId);
      if (!schedule || (schedule && !schedule[day])) return res.sendStatus(404);

      const booking = await new Booking({
        _id: new mongoose.Types.ObjectId(),
        userId,
        from,
        to,
        description,
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
