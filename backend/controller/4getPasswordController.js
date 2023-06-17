const userModel = require("../models/userModels");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");

// @desc Register new user
// @route POST /api/login
// @access Public
const forgetPassword = async () => {
  const { email } = req.body;
  try {
    let user = await userModel.findOne({ email: email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User does not exist" });
    }
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "20m",
      }
    );
    const link = `http://localhost:8080/reset-password/${user.id}/${token}`;

    // nodemailer transporter for sending the reset password email
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your-email@gmail.com",
        password: "your-password",
      },
    });
    let mailOptions = {
      from: "your-email@gmail.com",
      to: "recipient-email@gmail.com",
      subject: "Password Reset",
      text: link,
    };

    // Sending the password reset email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(400).json({ success: false, message: "Failed to send email" });
      } else {
        res.status(200).json({ success: true, message: "Email sent" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
