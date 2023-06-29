const data = require("../models/dataModel");

// @desc Reset user password
// @route POST /api/users/questions?page=1&limit=10
// @access Private
const questions = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  // Calculate the maximum limit that can be skipped
  const skip = (page - 1) * limit;

  try {
    const fetchedQuestions = await data
      .find()
      .limit(limit)
      .skip(Math.max(0, skip));
    res.status(200).json({ success: true, message: fetchedQuestions });
    console.log(fetchedQuestions);
  } catch (error) {
    console.log(error.message); // winston
    res
      .status(500)
      .json({ success: false, message: "Error fetching questions." });
  }
};

module.exports = questions;
