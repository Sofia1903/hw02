const HttpError = require("../utils/HttpError");

const validateBody = (schema) => {
  const validateMiddleware = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
      next(HttpError(400, "Field missing"));
      return;
    }

    const { error } = schema.validate(req.body);
    if (error) {
      error.details[0].type === "any.required"
        ? next(
            HttpError(400, `Missing required filed ${error.details[0].path[0]}`)
          )
        : next(HttpError(400, error.message));
    }
    next();
  };
  return validateMiddleware;
};

module.exports = validateBody;
