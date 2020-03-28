const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  (async () => {
    try {
      const { userId, isAdmin } = await jwt.verify(token, "secret");

      req.userId = userId;
      req.isAdmin = isAdmin;

      next();
    } catch (err) {
      res.sendStatus(401);
    }
  })();
};
