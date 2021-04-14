const { ErrorHandler } = require(`../services/ErrorHandler`);

module.exports = (req, res, next) => {
  return next(new ErrorHandler(400, `Not found bro`));

  throw new Error(`my error`);

  res.status(200).json({ message: `Hello World` });
};
