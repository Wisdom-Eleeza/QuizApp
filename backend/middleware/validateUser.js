const Joi = require("joi");

function validateRegisterUser(req, res, next) {
  console.log('Register');
  const schema = Joi.object({
    name: Joi.string().min(5).max(255).required(),
    email: Joi.string().min(5).max(50).required().email(),
    password: Joi.string().min(10).max(255).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    const errorMessage = error.details[0].message;
    // Pass the error to the next middleware or error handler
    next(new Error(errorMessage));
  } 
  return next()
}

module.exports = validateRegisterUser;





// const Joi = require("joi");

// function validateRegisterUser(user) {
//   const schema = Joi.object({
//     name: Joi.string().min(5).max(255).required(),
//     email: Joi.string().min(5).max(50).required().email(),
//     password: Joi.string().min(10).max(255).required(),
//   });
//   return schema.validate(user);
// }
// next()

// module.exports = validateRegisterUser;

