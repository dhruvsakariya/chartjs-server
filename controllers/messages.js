const Message = require("../models/message");

exports.getMessages = (req, res, next) => {
  Message.find()
    .then((messages) => {
      res.status(200).json({ messages });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
