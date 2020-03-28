const User = require("../../entity/user");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

exports.user_authentication = (req, res) => {
  const { username, password } = req.body;
  (async () => {
    try {
      const user = await User.findOne({ username }).select("password isAdmin");
      if (!user) return res.sendStatus(400);

      const result = await bcrypt.compare(password, user.password);
      if (!result) return res.sendStatus(400);

      const token = jwt.sign(
        { userId: user.id, isAdmin: user.isAdmin },
        "secret"
      );
      if (!token) return res.sendStatus(400);
      debugger;
      res.status(200).json({ token });
    } catch (err) {
      res.sendStatus(400);
    }
  })();
};
