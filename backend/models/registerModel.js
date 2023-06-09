const mongoose = require("mongoose");


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

const registerModel = mongoose.model("User", registerUserSchema);

// const imageModel = mongoose.model("Image", imageSchema);
module.exports = { registerModel };
