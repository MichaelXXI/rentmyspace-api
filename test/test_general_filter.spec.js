const expect = require("chai").expect;
const Room = require("../entity/room");
const User = require("../entity/user");
const Booking = require("../entity/booking");
const Type = require("../entity/type");
const Additional = require("../entity/additional");
const request = require("supertest");
const mongoose = require("mongoose");

describe("filter", () => {
  let bodyRoom,
    bodyType,
    bodyAdditional,
    bodyUser,
    bodyBooking1,
    bodyBooking2,
    bodyBooking3;

  before(async () => {
    try {
      bodyUser = {
        username: "miker",
        email: "misha@email.com",
        password: "aorgarg23",
        isAdmin: true
      };
      debugger;
      const user = await new User({
        _id: new mongoose.Types.ObjectId(),
        ...bodyUser
      }).save();
      debugger;
      bodyAdditional = {
        name: "TV"
      };

      const additional = await new Additional({
        _id: new mongoose.Types.ObjectId(),
        ...bodyAdditional
      }).save();

      bodyType = {
        name: "Sport"
      };

      const type = await new Additional({
        _id: new mongoose.Types.ObjectId(),
        ...bodyType
      }).save();

      bodyRoom = {
        userId: user.id,
        additional: additional.id,
        type: type.id,
        description: "Descripcion de room",
        conditions: "Conditions of room",
        images: [],
        capacity: 25,
        area: 30,
        price: 60
      };

      const room = await new Room({
        _id: new mongoose.Types.ObjectId(),
        ...bodyRoom
      }).save();

      bodyBooking1 = {
        userId: user.id,
        from: "2020-03-20T10:00:00.000Z",
        to: "2020-03-20T12:00:00.000Z",
        description: "1",
        conditions: "Conditions"
      };

      const booking1 = await new Room({
        _id: new mongoose.Types.ObjectId(),
        ...bodyBooking1
      }).save();

      bodyBooking2 = {
        userId: user.id,
        from: "2020-03-20T13:00:00.000Z",
        to: "2020-03-20T17:00:00.000Z",
        description: "2",
        conditions: "Conditions"
      };

      const booking2 = await new Room({
        _id: new mongoose.Types.ObjectId(),
        ...bodyBooking2
      }).save();

      bodyBooking3 = {
        userId: user.id,
        from: "2020-03-20T20:00:00.000Z",
        to: "2020-03-20T22:00:00.000Z",
        description: "3",
        conditions: "Conditions"
      };

      const booking3 = await new Room({
        _id: new mongoose.Types.ObjectId(),
        ...bodyBooking3
      }).save();
    } catch (err) {
      debugger;
    }
  });

  describe("filter", () => {
    it("filter", async () => {
      debugger;
    //   const resp = await request(app).get("/room");
    });
  });
});
