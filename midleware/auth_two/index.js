const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  (async () => {
    try {
      const { id, isAdmin } = await jwt.verify(token, "secret");

      if (!isAdmin) return res.sendStatus(401);

      req.userId = id;
      req.isAdmin = isAdmin;

      next();
    } catch (err) {
      res.sendStatus(401);
    }
  })();
};
