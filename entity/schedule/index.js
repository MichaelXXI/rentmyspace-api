const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  _id: Schema.Types.ObjectId,
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  month: { type: Number },
  year: { type: Number },
  1: [
    { _id: false, bookingId: { type: Schema.Types.ObjectId, ref: "Booking" } }
  ],
  2: [
    { _id: false, bookingId: { type: Schema.Types.ObjectId, ref: "Booking" } }
  ],
  3: [
    { _id: false, bookingId: { type: Schema.Types.ObjectId, ref: "Booking" } }
  ],
  4: [
    { _id: false, bookingId: { type: Schema.Types.ObjectId, ref: "Booking" } }
  ],
  5: [
    { _id: false, bookingId: { type: Schema.Types.ObjectId, ref: "Booking" } }
  ],
  6: [
    { _id: false, bookingId: { type: Schema.Types.ObjectId, ref: "Booking" } }
  ],
  7: [
    { _id: false, bookingId: { type: Schema.Types.ObjectId, ref: "Booking" } }
  ],
  8: [
    { _id: false, bookingId: { type: Schema.Types.ObjectId, ref: "Booking" } }
  ],
  9: [
    { _id: false, bookingId: { type: Schema.Types.ObjectId, ref: "Booking" } }
  ],
  10: [
    { _id: false, bookingId: { type: Schema.Types.ObjectId, ref: "Booking" } }
  ],
  11: [
    { _id: false, bookingId: { type: Schema.Types.ObjectId, ref: "Booking" } }
  ],
  12: [
    { _id: false, bookingId: { type: Schema.Types.ObjectId, ref: "Booking" } }
  ],
  13: [
    { _id: false, bookingId: { type: Schema.Types.ObjectId, ref: "Booking" } }
  ],
  14: [
    { _id: false, bookingId: { type: Schema.Types.ObjectId, ref: "Booking" } }
  ],
  15: [
    { _id: false, bookingId: { type: Schema.Types.ObjectId, ref: "Booking" } }
  ],
  16: [
    { _id: false, bookingId: { type: Schema.Types.ObjectId, ref: "Booking" } }
  ],
  17: [
    { _id: false, bookingId: { type: Schema.Types.ObjectId, ref: "Booking" } }
  ],
  18: [
    { _id: false, bookingId: { type: Schema.Types.ObjectId, ref: "Booking" } }
  ],
  19: [
    { _id: false, bookingId: { type: Schema.Types.ObjectId, ref: "Booking" } }
  ],
  20: [
    { _id: false, bookingId: { type: Schema.Types.ObjectId, ref: "Booking" } }
  ],
  21: [
    { _id: false, bookingId: { type: Schema.Types.ObjectId, ref: "Booking" } }
  ],
  22: [
    { _id: false, bookingId: { type: Schema.Types.ObjectId, ref: "Booking" } }
  ],
  23: [
    { _id: false, bookingId: { type: Schema.Types.ObjectId, ref: "Booking" } }
  ],
  24: [
    { _id: false, bookingId: { type: Schema.Types.ObjectId, ref: "Booking" } }
  ],
  25: [
    { _id: false, bookingId: { type: Schema.Types.ObjectId, ref: "Booking" } }
  ],
  26: [
    { _id: false, bookingId: { type: Schema.Types.ObjectId, ref: "Booking" } }
  ],
  27: [
    { _id: false, bookingId: { type: Schema.Types.ObjectId, ref: "Booking" } }
  ],
  28: [
    { _id: false, bookingId: { type: Schema.Types.ObjectId, ref: "Booking" } }
  ],
  29: [
    { _id: false, bookingId: { type: Schema.Types.ObjectId, ref: "Booking" } }
  ],
  30: [
    { _id: false, bookingId: { type: Schema.Types.ObjectId, ref: "Booking" } }
  ],
  31: [
    { _id: false, bookingId: { type: Schema.Types.ObjectId, ref: "Booking" } }
  ]
});

module.exports = mongoose.model("Schedule", scheduleSchema);
