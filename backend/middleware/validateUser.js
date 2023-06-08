const Joi = require('joi')


function validateRegisterUser(user) {
    const schema = Joi.object({
      name: Joi.string().min(5).max(255).required(),
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(10).max(255).required(),
    });
    return schema.validate(user);
  }

  module.exports = validateRegisterUser