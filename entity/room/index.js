const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  _id: Schema.Types.ObjectId,
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  description: { type: String, required: true },
  conditions: { type: String, required: true },
  images: { type: [String] },
  price: { type: Number, required: true }
});

module.exports = mongoose.model("Room", roomSchema);
