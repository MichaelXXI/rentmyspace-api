const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  _id: Schema.Types.ObjectId,
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  additional: { type: Schema.Types.ObjectId, ref: "Additional" },
  type: { type: Schema.Types.ObjectId, ref: "Type" },
  description: { type: String, required: true },
  conditions: { type: String, required: true },
  images: { type: [String] },
  capacity: { type: Number, required: true },
  area: { type: Number, required: true },
  price: { type: Number, required: true }
});

module.exports = mongoose.model("Room", roomSchema);
