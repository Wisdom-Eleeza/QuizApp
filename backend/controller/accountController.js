const { userModel } = require("../models/userModels");

// @desc Register new user
// @route POST /api/account/:id
// @access Public
const accountUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { contact, location, gender } = req.body;

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
  } catch (error) {
    res.status(500).json({ error: " Failed to Update Account Settings" });
  }
};

module.exports = accountUpdate;
