const userModel = require("../models/userModels");
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");


// @desc Register new user
// @route POST /api/resetPassword
// @access Public
const resetPassword = async (req, res) => {
  try {
    const { id, token } = req.params;
    const { password } = req.body //Retrieved the password from the request body
    const user = await userModel.findById({ id });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User does not exist" });
    }
    try {
      jwt.verify(token, process.env.JWT_SECRET);
      // Additional actions after successful token verification
      // return res.redirect(`/reset-password/${id}/${token}`);
      user.password = await bcrypt.hash(password, 10) // hashing the new password before updating
      await user.save(); // saving the updated user
      // return res.redirect("http://localhost:8080/api/login");
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        return res
          .status(400)
          .json({ success: false, message: "Token expired" });
      }
      return res.status(400).json({ success: false, message: "Invalid token" });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: "Not verified" });
  }
};

module.exports = resetPassword;
