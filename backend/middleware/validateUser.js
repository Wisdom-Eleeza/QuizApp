const Joi = require("joi");

function validateRegisterUser(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(255).required(),
    email: Joi.string().min(5).max(50).required().email(),
    password: Joi.string().min(10).max(255).required(),
  });
  // const { error } = validateRegisterUser(req.body);
  // if (error) return res.status(400).send(error.details[0].message);
  const { error } = schema.validate(req.body);
  if (error && error.name === "ValidationError") {
    const validationErrors = error.details.map((detail) => detail.message);
    console.log('Validation errors:', validationErrors)
    return res.status(400).send(error.details[0].message);
  } else {
    // return next();
  }
}

module.exports = validateRegisterUser;
