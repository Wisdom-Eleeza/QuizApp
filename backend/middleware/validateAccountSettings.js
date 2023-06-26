const Joi = require("joi");

// Password must contain at least one uppercase letter, one lowercase letter, one number, and the '@' symbol.
function validateAccountSettings(req, res, next) {
  const schema = Joi.object({
    contact: Joi.string().min(10).max(20).required(),
    location: Joi.string().max(150).required(),
    gender: Joi.string().valid("male", "female").required()
  });

  const { error } = schema.validate(req.body);
  if (error) {
    const validationError = error.details[0].message;
    console.log("validate:", validationError);
    return res.status(400).json({ success: false, message: validationError });
  } else {
    return next();
  }
}

module.exports = validateAccountSettings;
