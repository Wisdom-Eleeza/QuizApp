const { userModel } = require("../models/userModels");
const bcrypt = require('bcrypt')

// @desc Register new user
// @route POST /api/account/:id
// @access Public
const accountUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { contact, location, gender, currentPassword, newPassword, confirmPassword } = req.body;
    console.log(req.body)

    //Finding user by ID
    const user = await userModel.findById({ _id: id });

    //if not user then its error
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User does not exist" });

    //Updating the user's account settings if the user is found
    user.contact = contact;
    user.location = location;
    user.gender = gender;
    await user.save();

    res
      .status(200)
      .json({
        success: true,
        message: "Account Settings Updated Successfully",
      });

    //Comparing the current password with the stored password
    const isPasswordMatch = await bcrypt.compare(currentPassword, user.password)
    if(!isPasswordMatch) return res.status(401).json({ success: false, message: "Wrong Password Provided"})

    //Validating the new password
    if(newPassword !== confirmPassword) return res.status(400).json({ success: false, message: "Password does not match, Try Again"})
  } catch (error) {
    res.status(500).json({ error: " Failed to Update Account Settings" });
  }
};

module.exports = accountUpdate;
