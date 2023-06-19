const { userModel } = require("../models/userModels");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

// @desc Register new user
// @route POST /api/forgetPassword
// @access Public
const forgetPassword = async (req, res) => {
  try {
    console.log("Hello");
    const { email } = req.body;
    console.log(email);
    // Find the user by email
    let user = await userModel.findOne({ email: email });
    console.log("user", user);
    if (!user) {
      // User not found
      return res
        .status(404)
        .json({ success: false, message: "User does not exist" });
    }

    // Generate a token for password reset
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "30m",
      }
    );

    // Create the password reset link
    const link = `http://localhost:8080/api/resetPassword/${user._id}/${token}`;

    // Create a nodemailer transporter for sending the reset password email
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "wisdom.eleeza@amalitech.com", // Replace with your email
        pass: "mwxupjjcqtjzkccw", // Replace with your email password or use process.env.EMAIL_PASSWORD
      },
    });

    // Set up the email options
    let mailOptions = {
      from: "wisdom.eleeza@amalitech.com", // Replace with your email
      to: user.email, // Recipient's email
      subject: "Password Reset", // Email subject
      text: link, // Email body, containing the reset link
    };

    // Sending the password reset email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        // Failed to send email
        return res
          .status(400)
          .json({ success: false, message: "Failed to send email" });
      } else {
        // Email sent successfully
        return res
          .status(200)
          .json({ success: true, message: "Email sent: " + info.response });
      }
    });
  } catch (error) {
    // Something went wrong
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = forgetPassword;
