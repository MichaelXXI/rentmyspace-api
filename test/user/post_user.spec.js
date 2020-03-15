const expect = require("chai").expect;
const Room = require("../../entity/room");
const User = require("../../entity/user");
const Booking = require("../../entity/booking");
const Type = require("../../entity/type");
const Additional = require("../../entity/additional");
const request = require("supertest");
const mongoose = require("mongoose");

describe("filter", async () => {
  before(async () => {
    try {
      const user = await new User({
        _id: new mongoose.Types.ObjectId(),
        username: "miker",
        email: "misha@email.com",
        password: "aorgarg23",
        isAdmin: true
      });

      debugger;

      await user.save();

      const rrr = await User.find();
      debugger;
    } catch (err) {
      debugger;
    }
  });

  describe("deded", async () => {
    it("should return -1 when the value is not present", async () => {
      debugger;
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
