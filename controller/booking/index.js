const mongoose = require("mongoose");

const Booking = require("../../entity/booking");
const User = require("../../entity/user");

exports.create_booking = (req, res) => {
  const { userId } = req;
  const { roomId } = req.params;
  const { day, startDate, duration, description, conditions } = req.body;

  let milliseconds = 3600000;
  let endDate = startDate + duration * milliseconds;
  debugger;
  (async () => {
    try {
      const user = await User.findById(userId).orFail();

      const booking = await Booking.create({
        _id: mongoose.Types.ObjectId(),
        day,
        startDate,
        endDate,
        description,
        conditions
      });

      res.status(200).json(booking);
    } catch (err) {
      netxt(err);
    }
  })();
};
