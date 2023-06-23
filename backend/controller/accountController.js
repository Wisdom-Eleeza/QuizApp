const { userModel } = require("../models/userModels");
const bcrypt = require("bcrypt");

// @desc Register new user
// @route POST /api/users/account/:id
// @route POST /api/users/account/:id/password
// @access Public
const accountUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      contact,
      location,
      gender,
      currentPassword,
      newPassword,
      confirmPassword,
    } = req.body;
    console.log(req.body);

    // Finding user by ID
    const user = await userModel.findById(id);

    // If user does not exist, return error
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User does not exist" });

    // Comparing the current password with the stored password
    const isPasswordMatch = await bcrypt.compare(
      currentPassword,
      user.password
    );
    if (!isPasswordMatch)
      return res
        .status(401)
        .json({ success: false, message: "Wrong Password Provided" });

    // Validating the new password
    if (newPassword !== confirmPassword)
      return res.status(400).json({
        success: false,
        message: "Passwords do not match, please try again",
      });

    // Updating the user's account settings if the user is found
    user.contact = contact;
    user.location = location;
    user.gender = gender;
    
    // Updating the password if a new password is provided
    if (newPassword) {
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
    }
    
    await user.save();

    res.status(200).json({
      success: true,
      message: "Account Settings Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to Update Account Settings" });
  }
};

module.exports = accountUpdate;
