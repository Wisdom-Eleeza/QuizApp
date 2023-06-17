const userModel = require("../models/userModels");
const nodemailer = require('nodemailer')
const bcrypt = require("bcrypt");

// @desc Register new user
// @route POST /api/login
// @access Public
const forgetPassword = async () => {
  const { id, email } = req.body;
  try {
    let user = await userModel.findOne({ email: email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User does not exist" });
    }
    const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '20m'
    })
    const link = `http://localhost:8080/reset-password/${user.id}/${token}`

    // nodemailer transporter for sending the reset password email
    let transporter = nodemailer.createTransport({
        
    })
  } catch (error) {}
};
