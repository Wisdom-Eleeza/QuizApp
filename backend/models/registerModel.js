const mongoose = require("mongoose");

const registerUserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: 10,
      maxlength: 255,
    },
    email: {
      type: String,
      maxlength: 50,
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
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    interests: [
      {
        type: String,
        maxlength: 8,
      },
    ],
  },
  {
    timestamps: true,
  }
);
const registerModel = mongoose.model("User", registerUserSchema);
module.exports = { registerModel };
