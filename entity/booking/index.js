const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  _id: Schema.Types.ObjectId,
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  from: { type: Date, required: true },
  to: { type: Date, required: true },
  description: { type: String, required: true },
  conditions: { type: String }
});

module.exports = mongoose.model("Booking", bookingSchema);
