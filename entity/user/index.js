const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: Schema.Types.ObjectId,
  username: { type: String, min: 3, max: 20, unique: true, required: true },
  password: { type: String, required: true, select: false },
  email: { type: String, required: true, select: true },
  isAdmin: { type: Boolean, default: false, select: false }
});

module.exports = mongoose.model("User", userSchema);
