const userModel = require("../models/userModels");
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
    const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET)
  } catch (error) {}
};
