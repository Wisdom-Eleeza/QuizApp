const userModel = require('../models/userModels')

// @desc Register new user
// @route POST /api/deleteUser/:id
// @access Public
async function deleteUser(req, res) {
    try {
      const { id } = req.params;
      const deletedUser = await userModel.findByIdAndDelete({ _id: id })
  
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

  module.exports = deleteUser