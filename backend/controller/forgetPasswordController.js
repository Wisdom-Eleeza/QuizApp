const { userModel } = require("../models/userModels");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// @desc Register new user
// @route POST /api/users/forgetPassword
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
    console.log(token);

    // Create the password reset link
    const link = `http://localhost:5173/resetPassword/${user._id}/?token=${token}`;
    /*
    Instead of hard-coding the base URL for the password reset link, use the req object 
    to get the current URL and extract the protocol, host, and port. 
    This ensures that the link will work regardless of where the app is deployed.
    */
    // const baseUrl = `${req.protocol}://${req.get("host")}`;
    // const link = `${baseUrl}/resetPassword/${user._id}/?token=${token}`;

    // Create a nodemailer transporter for sending the reset password email
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.TRANSPORT_EMAIL, // Replace with your email
        pass: process.env.TRANSPORT_PASSWORD, // Replace with your email password or use process.env.EMAIL_PASSWORD
      },
    });

    // Set up the email options
    let mailOptions = {
      from: process.env.TRANSPORT_EMAIL, // Replace with your email
      to: user.email, // Recipient's email
      subject: "Reset Your Password", // Email subject
      html: `<p>Click the link below to reset your password:
      <a href="${link}">${link}</a>
      </p>`,
      //Email body, containing the reset password link
    };
    // Sending the password reset email
    transporter.sendMail(mailOptions, (error) => {
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
          .json({ success: true, message: "Email Sent Successfully" });
      }
    });
  } catch (error) {
    // Something went wrong
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = forgetPassword;
