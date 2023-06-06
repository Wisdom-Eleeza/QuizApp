const mongoose = require("mongoose");
const Joi = require("joi");

const registerUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: 5,
    maxlength: 255,
  },
  email: {
    type: String,
    required: [true, "Email field is required"],
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is a required field"],
    minlength: 5,
    maxlength: 1024,
  },
});

const registerModel = mongoose.model("User", registerUserSchema);

function validateRegisterUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(255).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(1024).required(),
  });
  return schema.validate(user);
}

module.exports = { registerModel, validateRegisterUser };
