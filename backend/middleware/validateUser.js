const Joi = require("joi");

// Password must contain at least one uppercase letter, one lowercase letter, one number, and the '@' symbol.
function validateRegisterUser(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(255).required(),
    email: Joi.string().min(5).max(50).required().email(),
    password: Joi.string()
      .min(10)
      .max(255)
      .required()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@])[\w@]+$/),
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

module.exports = validateRegisterUser;
