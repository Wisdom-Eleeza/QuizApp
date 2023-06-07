const mongoose = require("mongoose");
const Joi = require("joi");

const registerUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: 10,
    maxlength: 255,
  },
  email: {
    type: String,
    required: [true, "Email field is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is a required field"],
    minlength: 5,
    maxlength: 255,
  },
  profileImage: {
    type: String,
  }
});

const imageSchema = new mongoose.Schema({
  upload: {
    type: Data,
    default: Date.now(),
  }
})

const registerModel = mongoose.model("User", registerUserSchema);
const imageModel = mongoose.model("Image", imageSchema)

function validateRegisterUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(255).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(10).max(255).required(),
  });
  return schema.validate(user);
}

module.exports = { registerModel, imageModel, validateRegisterUser };
