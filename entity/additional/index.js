const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const additionalSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true }
});

module.exports = mongoose.model("Additional", additionalSchema);
