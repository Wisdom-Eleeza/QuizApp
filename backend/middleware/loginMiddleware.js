const Joi = require("joi");

function validateLogin(req, res, next) {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(10).max(255).required(),
  };

  try {
    Joi.assert(req, schema);
    next();
  } catch (error) {
    res.status(400).json({success: false, message: error.details[0].message})
  }
}

module.exports = validateLogin
