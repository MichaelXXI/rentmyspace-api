const User = require("../../entity/user");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

exports.login = (req, res) => {
  const { username, password } = req.body;
  debugger;

  bcrypt.compare(password, 10).then(async (hash, err) => {
    try {

    } catch (err) {
      res.sendStatus(400);
    }
  });
};
