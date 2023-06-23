const { userModel } = require("../models/userModels");

// @desc Register new user
// @route POST /api/deleteUser/:id
// @access Public
async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    //find the user by ID and update the isActive field to false, new option return the updated document
    const deletedUser = await userModel.findByIdAndUpdate({
      _id: id,
      isActive: false,
      new: true,
    });

    if (!deletedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User does not exist" });
    } else {
      res
        .status(200)
        .json({ success: true, message: "User Deleted Successfully" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}

module.exports = deleteUser;
