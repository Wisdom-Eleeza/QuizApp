const userModel = require("../models/userModels");
const bcrypt = require("bcrypt");
const connectDB = require("../config/db");
const { log } = require("console");

// @desc Register new user
// @route POST /api/login
// @access Public
const loginUser = async (req, res) => {
  try {
    // finding the email a user, if not in the database send error
    let user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(400)
        .json({
          success: false,
          message:
            "Authentication failed. Please check your login credentials.",
        });
    }

    // comparing the password provided by the user with the hashed password in the database, if not true user have no access
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    console.log(validPassword);
    if (!validPassword)
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials provided" });


    // checkbox value sent to the req.body
    const rememberMe = req.body.rememberMe;

    // token generating logic in userModel,
    // generating token to a specific user
    // console.log(user.methods);
    const token = user.generateAuthToken();

    // storing token in a cookie or local storage for longer duration
    if(rememberMe) {
      res.cookie('token', token, {
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days expiration in milliseconds
        httpOnly: true, // ensuring the cookie is only accessed via HTTP(S)
      })
    }
    return res
      .status(200)
      .json({
        success: true,
        token,
        message: "You have successfully logged in.",
      });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Oops! Something went wrong. Please try again later.",
      });
  }
};

module.exports = loginUser;
