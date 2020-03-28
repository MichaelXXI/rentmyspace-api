module.exports = (error, req, res, next) => {
  debugger;
  let message = undefined;
  let status = undefined;

  if (error) {
    switch (error.name) {
      case "ValidationError":
        message = error.message;
        status = 400;
        break;
      case "DocumentNotFoundError":
        message = error.message;
        status = 404;
        break;
      default:
        status = 500;
    }

    res.status(status).json({ message: message });
  }
};
