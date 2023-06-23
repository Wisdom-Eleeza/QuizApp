const Joi = require("joi");

function validateAccountSettings(req, res, next) {
  const schema = Joi.object({
    contact: Joi.string().min(10).max(20).required(),
    location: Joi.string().max(150).required(),
    gender: Joi.string().valid("male", "female").required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    const validationError = error.details[0].message;
    return res.status(400).json({ success: false, message: validationError });
  } else {
    return next();
  }
}

module.exports = validateAccountSettings;
