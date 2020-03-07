const User = require("../../entity/booking");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

exports.create_user = (req, res) => {
  const { username, password } = req.body;

  bcrypt.hash(password, 10).then(async (hash, err) => {
    try {
      const user = await new User({
        _id: new mongoose.Types.ObjectId(),
        username,
        password: hash,
        isAdmin: false
      }).save();

      res.status(200).json({ id: user.id });
    } catch (err) {
      res.sendStatus(400);
    }
  });
};
